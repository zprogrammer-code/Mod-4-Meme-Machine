import React, { Component } from "react";
import Home from "./containers/homepage";
// import Page2 from "./components/Page2";
import "./App.css";

import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component{

    constructor(){
      super()
      this.state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.img"
      }
    }
    render() {
      return (
          <div>
            <HashRouter basename={process.env.PUBLIC_URL}>
              <div className="App">
              <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/page2" component={Page2} /> */}
              </Switch>
              </div>
            </HashRouter>
          </div>
          );
        }
      }
      export default App;