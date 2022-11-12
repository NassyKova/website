import React from "react";
import Socials from "../socials/Social";

const Header = () => {
    return (
        <>
        <Socials class="nav-social"/>

            <h1 class="heading">Nassy Kova</h1>

            {/* <!-- navigation --> */}
            <nav class="menu">
                {/* <!-- HERE!!! --> */}
                <label input type="checkbox" id="checkbox-toggle"></label>
                <label for="checkbox-toggle">&#9781;</label>

                <div class="menu-items">
                    <ul>
                        <li class="current-link">About Me</li>
                        <li>
                            <a href="./blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="./cv.html">CV</a>
                        </li>
                        <li>
                            <a href="./contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </>
    );
};

export default Header;
