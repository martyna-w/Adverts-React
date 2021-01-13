import React from "react"
import ReactDom from "react-dom"

class MainBar extends React.Component {
    state = {term: ""}

    onInputChange = (event) => {
        this.setState({term :event.target.value});
    }

    onformSubmit = (event) =>{
        event.preventDefault()

        this.props.onFormSubmit(this.state.term)
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <a class="navbar-brand ms-1" href="#">Adverts</a>
                <form className="ui form d-flex" onSubmit={this.onformSubmit}>
                    <input type="text" id="searchBox" className="form-control form-rounded border border-dark" value={this.state.term} placeholder="Search Advert" onChange={this.onInputChange}/>
                    <button className="btn btn-outline-dark ms-1" type="submit" onClick={this.onFormSubmit}>Search</button>
                </form>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default MainBar