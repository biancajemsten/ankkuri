// Packages
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { hot } from "react-hot-loader/root";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HomePanel, AboutPanel, HeaderPanel, SlideDeck } from "./views";

// Style
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";

class App extends React.Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <HeaderPanel />
          <Switch>
            <Route exact path="/" component={HomePanel} />
            <Route exact path="/about" component={AboutPanel} />
            <Route exact path="/slides" component={SlideDeck} />
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}

export default hot(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
