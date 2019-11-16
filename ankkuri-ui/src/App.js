import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HomePanel, AboutPanel, HeaderPanel, SlideDeck } from "./views";

import { AppWrapper } from "./App.style";

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <HeaderPanel />
          <Switch>
            <Route exact path="/" component={HomePanel} />
            <Route exact path="/about" component={AboutPanel} />
            <Route exact path="/slides" component={SlideDeck} />
          </Switch>
        </AppWrapper>
      </Router>
    );
  }
}

export default hot(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
