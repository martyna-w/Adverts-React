import React from "react"
import Advert from "./Advert"
import CallApi from "../api/service"
import { withAlert } from "react-alert"
import { withRouter } from "react-router"

class AdvertsList extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            adverts: [],
        }
    }

    componentDidMount(){
        const advertId = this.props.match.params.advertId;
        const userId = this.props.match.params.userId;
        if (advertId != null){
            CallApi.getAdvertById(advertId)
            .then(res => {
                if (res.status === 200){
                    this.setState({
                        adverts: res.data
                    })
                } else if (res.status === 204){
                    this.props.alert.show("No advert with this id")
                }
                this.onAdvertsFetched()
            })
            .catch(err =>{
                console.log(err)
                this.props.alert.show("Error connecting to remote service")
            })
        } else if (userId != null) {
            CallApi.getUserAdverts(userId)
            .then(res => {
                if (res.status === 200){
                    this.setState({
                        adverts: res.data
                    })
                } else if (res.status === 204){
                    this.props.alert.show("No adverts found for this user")
                }
                this.onAdvertsFetched()
            })
            .catch(err =>{
                console.log(err)
                this.props.alert.show("Error connecting to remote service")
            })
        } else {
            CallApi.getAllAdverts()
            .then(res => {
                this.setState({
                    adverts: res.data
                })
                this.onAdvertsFetched()
            })
            .catch(err =>{
                console.log(err)
                this.props.alert.show("Error connecting to remote service")
            })
        }
        
    }

    getParams(){
        this.setState({
            advertId: 0
        })
    }

    onAdvertsFetched() {
        console.log(this.state.adverts)
    }
    
    render(){
        const {adverts} = this.state

        return(
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {adverts.map(advert => {
                            return <Advert advert={advert}/>
                        })}                        
                    </div>
                </div>
            </div>
        )
    }
}

export default withAlert()(withRouter(AdvertsList))