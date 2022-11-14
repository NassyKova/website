import React from "react";
import { Nav, NavLink, NavMenu } from "./components/NavbarElements";

const Navbar = () => {
    return (
        <>
            {/* <!-- HERE!!! -->
<label input type="checkbox" id="checkbox-toggle"></label>
<label for="checkbox-toggle">&#9781;</label> */}
            <Nav>
                <NavMenu>
                    <NavLink to="/AboutMe" About Me>
                        AboutMe
                    </NavLink>
                    <NavLink to="/Projects" Projects>
                        Projects
                    </NavLink>
                    <NavLink to="/ContactMe" Contact Me>
                        ContactMe
                    </NavLink>
                    <NavLink to="/AboutMe" About Me>
                        AboutMe
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
//             {/* <!-- HERE!!! -->
// <label input type="checkbox" id="checkbox-toggle"></label>
// <label for="checkbox-toggle">&#9781;</label> */}
