import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { HomePanel, AboutPanel, HeaderPanel } from "./views";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <HeaderPanel />
          <Switch>
            <Route exact path="/home" component={HomePanel} />
            <Route exact path="/about" component={AboutPanel} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
