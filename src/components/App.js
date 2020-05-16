import React, { Component } from "react";
import MemeGenerator from "../MemeGenerator";
import Header from "./Header";
import "./App.css";

class App extends Component {
    
constructor(){
    super()	      
    this.state = {	      
      topText: "",	       
      bottomText: "",	       
      randomImg: "http://i.img"	
    }   
}
render(){
    return(
        <div className="App">
            <Header />
            <MemeGenerator />
        </div>
        )
    }
}