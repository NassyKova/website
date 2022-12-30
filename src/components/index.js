import React from "react";
import { Nav, NavLink, NavMenu } from "./Navbar/NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activestyle="true">
            About
          </NavLink>
          <NavLink to="/projects" activestyle="true">
            Projects
          </NavLink>
          <NavLink to="/contact" activestyle="true">
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
