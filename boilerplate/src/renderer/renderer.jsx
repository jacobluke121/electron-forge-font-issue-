import React  from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import App          from "./components/App/App";

const routing = (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </HashRouter>
)

ReactDOM.render(routing, document.getElementById('root'));
