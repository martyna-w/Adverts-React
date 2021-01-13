import React from "react";
import AdvertContainer from "./components/AdvertContainer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

const baseURL = "localhost:3000/"

const App = () => {


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

export default App;