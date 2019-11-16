// Packages
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { hot } from "react-hot-loader/root";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { HomePanel, AboutPanel, HeaderPanel } from "./views";

// Utils
import theme from "./styles/theme";
import GlobalStyle from './styles/globalStyle';

class App extends React.Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div className="app">
            <HeaderPanel />
            <Switch>
              <Route exact path="/" component={HomePanel} />
              <Route exact path="/about" component={AboutPanel} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default hot(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
