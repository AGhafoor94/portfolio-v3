import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Portfolio from "../../container/Portfolio/Portfolio";
import Navigation from "../Navigation/Navigation";

const Routes = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
