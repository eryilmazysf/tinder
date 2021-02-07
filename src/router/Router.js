import React from "react";
import Header from "../Header";
import Messages from "../Messages";
import HomePage from "../HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/message" component={Messages} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
