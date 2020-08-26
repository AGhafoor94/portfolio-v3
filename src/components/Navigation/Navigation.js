import React, { useState } from "react";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  const burger = () => {
    const burgerNav = document.getElementById("burger");
    console.log("hi");
  };
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item>
            <Link to="/">
              <Navbar.Item>Adnan</Navbar.Item>
            </Link>
          </Navbar.Item>
          <Navbar.Burger onClick={burger} />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position="end">
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
