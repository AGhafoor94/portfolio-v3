import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import { Navbar } from "react-bulma-components";

const Routes = () => {
  return (
    <div>
      <Router>
        <Navbar>
          <Navbar.Brand>
            <Navbar.Item>
              <Link to="/">
                <Navbar.Item>Adnan</Navbar.Item>
              </Link>
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <Link to="/portfolio">
                <Navbar.Item>Portfolio</Navbar.Item>
              </Link>
              <Link to="/contact">
                <Navbar.Item>Contact</Navbar.Item>
              </Link>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
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
