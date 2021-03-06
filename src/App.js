import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectList from "./ProjectList";
import InputBox from "./InputBox";
import "./App.css";

const projectList = [{ route: "InputBox", date: "3/1/2019" }];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <ProjectList projectList={projectList} />}
              />
              <Route exact path="/InputBox" render={() => <InputBox />} />
              <Route component=<p>Main</p> />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
