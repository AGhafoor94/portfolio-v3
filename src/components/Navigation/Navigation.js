import React, { useState } from "react";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";
import "./index.css";

const Navigation = () => {
  const [isActive, setisActive] = useState(false);
  const click = () => {
    setisActive(!isActive);
    const navBurger = document.querySelector(".navbar-burger");
    const navBar = document.querySelector(".navbar-menu");
    if (isActive) {
      navBurger.classList.add("is-active");
      navBar.classList.add("is-active");
    } else {
      navBurger.classList.remove("is-active");
      navBar.classList.remove("is-active");
    }
  };
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <Link to="/">
            <Navbar.Item renderAs="li">Adnan</Navbar.Item>
          </Link>
          <Navbar.Burger onClick={click} />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position="end">
            <Link to="/portfolio">
              <Navbar.Item renderAs="li">Portfolio</Navbar.Item>
            </Link>
            <Link to="/contact">
              <Navbar.Item renderAs="li">Contact</Navbar.Item>
            </Link>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </div>
  );
};

export default Navigation;
