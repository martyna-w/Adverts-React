import React from "react"
import "../css/sign.css"
import CallApi from "../api/service"
import { withAlert } from "react-alert"

class Register extends React.Component{
    constructor(props){
        super(props)
        this.onLoginChanged = this.onLoginChanged.bind(this)
        this.onPasswordChanged = this.onPasswordChanged.bind(this)
        this.onConfirmPasswordChanged = this.onConfirmPasswordChanged.bind(this)

        this.state = {
            login: "",
            password: "",
            confirmedPassword: ""
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

    onConfirmPasswordChanged(e){
        this.setState({
            confirmedPassword: e.target.value
        })
    }

    redirectToLogin(){
        this.props.history.push("/login")
    }

    register(e){
        e.preventDefault();
        
        var user = {
            email: this.state.login,
            password: this.state.password
        }

        if (this.state.password === this.state.confirmedPassword){
            CallApi.register(user)
            .then(res => {
                if (res.status === 201){
                    this.props.alert.show("Account has been succesfully created")
                    this.setState({
                        login: "",
                        password: "",
                        confirmedPassword: ""
                    })
                } else {
                    this.props.alert.show("Thre was an error while creating your account")
                }
                
            })
            .catch(err =>{
                console.log(err)
                this.props.alert.show("Error connecting to remote service")
                
            })
        } else {
            this.props.alert.show("Passwords are different");
        }
        
        
    }

    render (){
        return (
            <div className="text-center form-signin kek">
                <form className="form-signup">
                    <h1 className="h3 mb-3 fw-normal">Register</h1>
                    <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" value={this.state.login} onChange={this.onLoginChanged} required={true} autoFocus=""/>
                    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onPasswordChanged} required={true}/>
                    <label htmlFor="confirmPassword" className="visually-hidden">Password</label>
                    <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm password" value={this.state.confirmedPassword} onChange={this.onConfirmPasswordChanged} required={true}/>
                    <button className="w-100 btn btn-lg btn-dark" onClick={(e) => {this.register(e)}}>Register</button>
                    <p className="mt-5 mb-3 text-muted">Adverts 2021</p>
                </form>
            </div>
        )
    }
}

export default withAlert()(Register)
