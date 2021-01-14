import React, {useEffect, useState} from "react";
import {Switch, Route } from "react-router-dom";

import AdvertsList from "./components/AdvertsList";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { withRouter } from "react-router";

class App extends React.Component {
  render(){
    const state = {adverts: [], advert: null, user:null}
    const { history } = this.props

    return(
      <div>
        <header>
        <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={AdvertsList} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </main>    
      </div>    
    )
  } 
}

export default App;