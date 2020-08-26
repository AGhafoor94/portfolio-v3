import React, { useState } from "react";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";

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
          <Link to="/">Adnan</Link>
          <Navbar.Burger onClick={click} />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position="end">
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </div>
  );
};

export default Navigation;
