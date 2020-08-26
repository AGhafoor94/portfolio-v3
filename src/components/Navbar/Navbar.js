import React from "react";
import { Link, Router } from "react-router-dom";
import { Navbar as Navigation } from "react-bulma-components";

const Navbar = () => {
  return (
    <Router>
      <Navigation>
        <Navigation.Brand>
          <Navigation.Item renderAs="a" href="#">
            <p>Adnan</p>
          </Navigation.Item>
          <Navigation.Burger />
        </Navigation.Brand>
        <Navigation.Menu>
          <Navigation.Container>
            <Link to="/portfolio">
              <Navigation.Item>Portfolio</Navigation.Item>
            </Link>
            <Link to="/contact">
              <Navigation.Item>Contact</Navigation.Item>
            </Link>
          </Navigation.Container>
        </Navigation.Menu>
      </Navigation>
    </Router>
  );
};

export default Navbar;
