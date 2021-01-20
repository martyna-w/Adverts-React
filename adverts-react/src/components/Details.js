import React from "react"
import CallApi from "../api/service"
import { withAlert } from "react-alert"
import { withRouter } from "react-router"
import noImage from "../img/noImage.jpg"

class Details extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            advert: null
        }
    }

    componentDidMount(){
        const advertId = this.props.match.params.advertId;
        CallApi.getAdvertById(advertId)
        .then(res => {
            if (res.status === 200){
                this.setState({
                    advert: res.data
                })
            } else if (res.status === 204){
                this.props.alert.show("No advert with this id")
                this.props.history.push("/home")
            }
        })
        .catch(err =>{
            console.log(err)
            this.props.alert.show("Error connecting to remote service")
        })
    }

    render(){
        const baseUrl = "http://localhost:3000/"

        function showNoImage(){
            return <img className="card-img-top" src={noImage} alt={advert.title} />
        }

        function showImage(){
            return <img className="card-img-top" src={baseUrl+advert[0].imageUrl} alt={advert.title} />
        }

        function Display (props) {
            if (advert[0].imageUrl !== ""){
                return showImage()
            } else {
                return showNoImage()
            }
        }

        const {advert} = this.state
        if (!advert) {
            return <div>Loading Advert</div>
        } else {
            return(
                <div className="py-5 d-flex justify-content-center">
                    <div className="container">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 g-2  d-flex justify-content-center">
                            <div className="col">
                                <h1 className="h3 mb-3 fw-normal text-center">{advert[0].title}</h1>
                                <Display />
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                    <p className="card-text">{advert[0].description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-primary">Edit</button>
                                        <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                                        </div>
                                        <small className="text-muted">Author: {advert[0].owner}</small>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        
    }
}

export default withAlert()(withRouter(Details))