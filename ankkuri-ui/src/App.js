import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";

import { HomePanel, AboutPanel, SlideDeck } from "./views";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to={"/"} className="navLink">
                  Home
                </Link>
                <Link to={"/about"} className="navLink">
                  About
                </Link>
                <Link to={"/slides"} className="navLink">
                  Slides
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePanel} />
            <Route exact path="/about" component={AboutPanel} />
            <Route exact path="/slides" component={SlideDeck} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
