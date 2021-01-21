import React from "react"
import { withAlert } from "react-alert"
import { withRouter } from "react-router";

class Logout extends React.Component{
    constructor(props){
        super(props)
    }

    triggerNavbar(){
        window.updateNavbar()
    }

    componentDidMount(){
        try {
            sessionStorage.removeItem("userEmail")
            sessionStorage.removeItem("userToken")
            sessionStorage.removeItem("userId")
            this.props.alert.show("Logged out succesfully")
        } catch {
            this.props.alert.show("Nobody is logged")
        } finally {
            this.triggerNavbar()
            this.props.history.push("/home")
        }
    }

    render(){
        return <div>Loging out</div>
    }
}

export default withAlert()(withRouter(Logout))