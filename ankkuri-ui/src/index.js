import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import { PlainText } from "./elements";

class App extends React.Component {
  render() {
    return <PlainText text="hi" />;
  }
}

export default hot(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
