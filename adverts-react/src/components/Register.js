import React from "react"
import "../css/sign.css"

const Register = () => {

    return (
        <div className="text-center form-signin kek">
            <form className="form-signup">
                <h1 className="h3 mb-3 fw-normal">Register</h1>
                <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
                <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required={true}/>
                <label htmlFor="confirmPassword" className="visually-hidden">Password</label>
                <input type="confirmPassword" id="confirmPassword" className="form-control" placeholder="Confirm password" required={true}/>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">Adverts 2021</p>
            </form>
        </div>
    )
}

export default Register