import React, {useState, useEffect, useCallback} from "react"
import { Link, useHistory } from "react-router-dom"
import { Dropdown } from 'react-bootstrap';



const Navbar = () => {
    
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [userEmail, setUserEmail] = useState() //If something broke -> sessionStorage.getItem("userEmail")

    const history = useHistory();
    const redirectToLogin = useCallback(() => history.push('/login'), [history]);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    window.updateNavbar = () => {
        setUserEmail(sessionStorage.getItem("userEmail"))
        console.log()
    };

    useEffect(()=>{
        setUserEmail(sessionStorage.getItem("userEmail")) //If user refreshed the page
    },[])

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
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
                <div>
                    <Dropdown className="nav-item dropdown">
                        <Dropdown.Toggle className= "nav-link dropdown-toggle"
                        variant="dark btn-block" 
                        id="dropdown-basic">
                            Hi, {userEmail}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu">
                            <Dropdown.Item onClick={redirectToLogin}>Log out</Dropdown.Item>
                            <Dropdown.Item href="#">Delete account</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <Dropdown className="nav-item dropdown">
                        <Dropdown.Toggle className= "nav-link dropdown-toggle"
                        variant="dark btn-block" 
                        id="dropdown-basic">
                            Your adverts
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu">
                            <Dropdown.Item href="#" >Add</Dropdown.Item>
                            <Dropdown.Item href="#">Show my adverts</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        )

    }

    function Display(props) {
        const user = sessionStorage.getItem("userEmail")
        if (user != null){
            return <ShowUserPanel/>
        } 
        return <AskForSignin/>
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Adverts</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
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