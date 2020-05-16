import React, { Component } from "react";
import App from "./components/App"

import { HashRouter, Route, Switch } from "react-router-dom";



class homePage extends Component{

    render() {
      return (
          <div>
            <HashRouter basename={process.env.PUBLIC_URL}>
              <div className="App">
              <Switch>
                <Route exact path="./App" component={App} />
              </Switch>
              </div>
            </HashRouter>
          </div>
          );
        }
      }
      export default homePage;
 