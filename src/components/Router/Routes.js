import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";

import Navigation from "../Navigation/Navigation";

const Routes = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
