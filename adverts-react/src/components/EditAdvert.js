import React from "react"
import CallApi from "../api/service"
import { withAlert } from "react-alert"
import { withRouter } from "react-router";

class EditAdvert extends React.Component {
    constructor (props) {
        super(props)
        this.onTitleChanged = this.onTitleChanged.bind(this)
        this.onDescriptionChanged = this.onDescriptionChanged.bind(this)
        this.onFileUploaded = this.onFileUploaded.bind(this)

        this.state = {
            id: "",
            title: "",
            description: "",
            advertImage: null
        }
    }

    componentDidMount(){
        if (sessionStorage.getItem("userEmail") === null){
            this.props.history.push("/home")
            this.props.alert.show("You must be logged in to access this operation")
        } else {
            const advertId = this.props.match.params.advertId;
            CallApi.getAdvertById(advertId)
            .then(res => {
                if (res.status === 200){
                    this.setState({
                        id: res.data[0]._id,
                        title: res.data[0].title,
                        description: res.data[0].description
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
    }

    onTitleChanged(e) {
        this.setState({
            title: e.target.value
        })
    }

    onDescriptionChanged(e) {
        this.setState({
            description: e.target.value
        })
    }

    onFileUploaded(e) {
        this.setState({
            advertImage: e.target.files[0]
        })
    }

    patchAdvert(e){
        e.preventDefault() 

        var userToken = sessionStorage.getItem("userToken")
        var id = this.state.id
        var data = {
            title: this.state.title,
            description: this.state.description,
            advertImage: this.state.advertImage
        }

        CallApi.patchAdvert(id, data, userToken) //Jeszcze id
            .then(res => {
                if (res.status === 201){
                    this.props.alert.show("Advert modified succesfully")
                    this.props.history.push("/home")
                } else {
                    this.props.alert.show("Error processing your request")
                }
            })
            .catch(err =>{
                console.log(err)
                this.props.alert.show("Error connecting to remote service")
            })

    }

    render () {

        return (
            <div className="text-center py-5">
                <h4 className="mb-3">Edit advert!</h4>
                <div className="d-flex justify-content-center">
                    <form>
                        <div className="form-group ">
                            <div htmlFor="file">Add picture</div>
                            <input type="file" className="form-control-file" id="file" onChange={this.onFileUploaded}/>
                        </div>
                        <div className="form-group py-1">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Your advert title" onChange={this.onTitleChanged}/>
                        </div>
                        <div className="form-group py-1">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" rows="5" placeholder="Your advert description" onChange={this.onDescriptionChanged}></textarea>
                        </div>
                        <div className="form-group py-2">
                            <div>
                                <button type="submit" className="btn btn-dark btn-default btn-block" onClick={(e) => {this.patchAdvert(e)}}>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withAlert()(withRouter(EditAdvert))