import React from "react";
import GithubImage from "../../img/logos/GitHub-Mark-64px.png"

const Socials = () => {
    return (
        <div class="nav-social">
            <a href="https://github.com/NassyKova">
                <img src={GithubImage} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/nassykova/">
                <img src={require("../../img/logos/linkedin-64.png")} alt="LinkedIn" />
            </a>
        </div>
    );
};

export default Socials;
