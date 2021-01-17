import React from "react"
import CallApi from "../api/service"
import { withAlert } from "react-alert"
import { withRouter } from "react-router";

class AddAdvert extends React.Component {
    constructor (props) {
        super(props)
        this.onTitleChanged = this.onTitleChanged.bind(this)
        this.onDescriptionChanged = this.onDescriptionChanged.bind(this)
        this.onFileUploaded = this.onFileUploaded.bind(this)

        this.state = {
            title: "",
            description: "",
            advertImage: null
        }
    }

    componentDidMount(){
        if (sessionStorage.getItem("userEmail") === null){
            this.props.history.push("/")
            this.props.alert.show("You must be logged in to access this operation")
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

    addAdvert(e){
        e.preventDefault() 

        var userToken = sessionStorage.getItem("userToken")
        var data = {
            title: this.state.title,
            description: this.state.description,
            advertImage: this.state.advertImage
        }

        CallApi.postAdvert(data, userToken)
            .then(res => {
                if (res.status === 201){
                    this.props.alert.show("Advert added succesfully")
                    this.props.history.push("/")
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
                <h4 className="mb-3">Add new advert!</h4>
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
                                <button type="submit" className="btn btn-dark btn-default btn-block" onClick={(e) => {this.addAdvert(e)}}>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withAlert()(withRouter(AddAdvert))