import React from "react";
import LinkTo from "./LinkTo";

const Socials = () => {
    return (
        <div>
            <LinkTo
                href="https://github.com/NassyKova"
                img src="../../src/img/logos/GitHub-Mark-64px.png"
                alt="GitHub"
            />

            <LinkTo
                href="https://www.linkedin.com/in/nassykova/"
                src="../../img/logos/linkedin-64.png"
                alt="LinkedIn"
            />

        </div>
    );
};

export default Socials;
