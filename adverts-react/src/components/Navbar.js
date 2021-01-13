import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    function AskForSignin() {
        return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to={"/register"} className="nav-link active" aria-current="page">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link active" aria-current="page">Login</Link>
                </li>
            </ul>
        );
    }

    function ShowUserPanel(props) {
        return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {props.user.login}
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link to="#" className="dropdown-item">Log out</Link></li>
                        <li><Link to="#" className="dropdown-item">Delete account</Link></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link to="#" className="dropdown-item">Log out</Link></li>
                    <li><Link to="#" className="dropdown-item">Delete account</Link></li>
                </ul>
                </li>
            </ul>
        )

    }

    function Display(props) {
        if (props.user != null){
            return <ShowUserPanel/>
        } 
        return <AskForSignin/>
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Adverts</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Display />
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar