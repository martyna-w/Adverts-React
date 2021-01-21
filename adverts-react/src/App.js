import React from "react";
import {Switch, Route, Redirect } from "react-router-dom";


import AdvertsList from "./components/AdvertsList";
import Login from "./components/Login";
import Logout from "./components/Logout"
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AddAdvert from "./components/AddAdvert"
import Details from "./components/Details";
import EditAdvert from "./components/EditAdvert";
import RemoveAccount from "./components/RemoveAccount";

class App extends React.Component {

  render(){
    //const state = {adverts: [], advert: null, user:null}

    return(
      <div>
        <header>
        <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>                                                  
            <Route path="/user/:userId" component={AdvertsList}/>
            <Route path="/details/:advertId" component={Details} />    
            <Route path="/id/:advertId" component={AdvertsList} /> 
            <Route path="/edit-advert/:advertId" component={EditAdvert} /> 
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/delete-account" component={RemoveAccount} />
            <Route exact path="/add-advert" component={AddAdvert} />
            <Route exact path="/home" component={AdvertsList} />          
          </Switch>
        </main>    
      </div>    
    )
  } 
}

export default App;