import React from "react"
import { withAlert } from "react-alert"
import { withRouter } from "react-router";
import CallApi from "../api/service"

class RemoveAccount extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var user = sessionStorage.getItem("userId")
        if (user === null){
            this.props.alert.show("You must be logged in")
            this.props.history.push("/home")
        } else {
            var token = sessionStorage.getItem("userToken")
            CallApi.accountDelete(user, token)
                .then(res => {
                    console.log(res)
                    if (res.status === 200){
                        this.props.alert.show("Account removed")
                        this.props.history.push("/logout")
                    } else {
                        this.props.alert.show("Unexpected response")
                    }
                })
                .catch(err => {
                    this.props.alert.show("Error processing your request")
                    console.log(err)
                })
        }
    }

    render(){
        return <div>Removing account</div>
    }
}

export default withAlert()(withRouter(RemoveAccount))