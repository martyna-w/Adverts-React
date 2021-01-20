import React from "react";
import {Switch, Route } from "react-router-dom";


import AdvertsList from "./components/AdvertsList";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AddAdvert from "./components/AddAdvert"
import Details from "./components/Details";

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
                          
                        
            <Route path="/user/:userId" component={AdvertsList} key={window.location.pathname} />
            <Route path="/details/:advertId" component={Details} />    
            <Route path="/id/:advertId" component={AdvertsList} key={window.location.pathname}/> 
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/add-advert" component={AddAdvert} />
            <Route exact path="/home" component={AdvertsList} key={window.location.pathname}/>          
          </Switch>
        </main>    
      </div>    
    )
  } 
}

export default App;