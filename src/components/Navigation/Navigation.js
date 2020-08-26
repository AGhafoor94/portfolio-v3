import React from "react";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
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
    </div>
  );
};

export default Navigation;
