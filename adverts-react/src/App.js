import React from "react";
import {Switch, Route } from "react-router-dom";


import AdvertsList from "./components/AdvertsList";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AddAdvert from "./components/AddAdvert"

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
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/add-advert" component={AddAdvert} />
            <Route exact path="/" component={AdvertsList} />
            <Route path="/user/:userId" component={AdvertsList} />
            <Route path="/:advertId" component={AdvertsList} />  
          </Switch>
        </main>    
      </div>    
    )
  } 
}

export default App;