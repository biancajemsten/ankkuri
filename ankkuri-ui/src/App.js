// Packages
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { hot } from "react-hot-loader/root";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import {
  HomePanel,
  AboutPanel,
  HeaderPanel,
  SlideDeck,
  CreateRoutinePanel,
  DataPrivacy
} from "./views";
// Style
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import ProfilePanel from "./views/ProfilePanel/ProfilePanel";

import styled from "styled-components";

const MainWrapper = styled.main`
  padding-top: 120px;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <HeaderPanel />
          <MainWrapper>
            <Switch>
              <Route exact path="/" component={HomePanel} />
              <Route exact path="/the-science" component={AboutPanel} />
              <Route
                exact
                path="/create-routine"
                component={CreateRoutinePanel}
              />
              <Route exact path="/slides" component={SlideDeck} />
              <Route exact path="/profile" component={ProfilePanel} />
              <Route exact path="/data-privacy" component={DataPrivacy} />
            </Switch>
          </MainWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

export default hot(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
