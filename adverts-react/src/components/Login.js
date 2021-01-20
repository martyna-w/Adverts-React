import React from "react"
import "../css/sign.css"
import CallApi from "../api/service"
import { withAlert } from "react-alert"
import { withRouter } from "react-router";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.onLoginChanged = this.onLoginChanged.bind(this)
        this.onPasswordChanged = this.onPasswordChanged.bind(this)

        this.state = {
            login: "",
            password: ""
        }
    }

    onLoginChanged(e) {
        this.setState({
            login: e.target.value
        })
    }

    onPasswordChanged(e){
        this.setState({
            password: e.target.value
        })
    }

    redirectToAdverts(){
        this.props.history.push("/home")
    }
    
    triggerNavbar(){
        window.updateNavbar()
    }

    login(e){
        e.preventDefault()

        var user = {
            email: this.state.login,
            password: this.state.password
        }

        CallApi.login(user)
            .then(res => {
                if (res.status === 200){
                    sessionStorage.setItem("userEmail", user.email)
                    sessionStorage.setItem("userId", res.data.userId)
                    sessionStorage.setItem("userToken", res.data.token)
                    this.props.alert.show("Succesfully logged")
                    this.triggerNavbar()
                    this.redirectToAdverts()
                } else {
                    this.props.alert.show("Could not login, check credentials")
                }                
            })
            .catch(err =>{
                console.log(err)
                this.props.alert.show("Error connecting to remote service")
            })
    }

    render(){
        return (
            <div className="text-center form-signin kek">
                <form className="form-signin">
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" value={this.state.login} onChange={this.onLoginChanged}  required={true} autoFocus=""/>
                    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onPasswordChanged}  required={true}/>
                    <button className="w-100 btn btn-lg btn-dark" onClick={(e) => {this.login(e)}}>Sign in</button>
                    <p className="mt-5 mb-3 text-muted">Adverts 2021</p>
                </form>
            </div>
        )
    }
}

export default withAlert()(withRouter(Login))