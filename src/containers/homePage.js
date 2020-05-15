import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import MemeGenerator from './MemeGenerator'
// import PhotoLibrary from './containers/PhotoLibrary'

class HomePage extends Component{

      constructor(){
        super()
        this.state = {
          topText: "",
          bottomText: "",
          randomImg: "http://i.img"
        }
      }

  render(){
      return (
        <div className="App">
          <Header />
          <MemeGenerator />
        
        </div>
      );
    }
}


export default HomePage;
 