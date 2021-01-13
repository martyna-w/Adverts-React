import React, {useEffect, useState} from "react";

import AdvertContainer from "./components/AdvertContainer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render(){
    const state = {adverts: [], advert: null, user:null}

    return(
      <div>
        <header>
        <Navbar />
        </header>
        <main>
          <Login />
          <AdvertContainer /> 
        </main>    
      </div>    
    )
  } 
}

export default App;