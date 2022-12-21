import React from "react";
import GithubImage from "../../img/logos/GitHub-Mark-64px.png";
import LinkedinImage from "../../img/logos/linkedin-64.png";
import { Wrapper, Image } from "./Socials.styles";

const Socials = () => {
  return (
    <Wrapper>
      <a href="https://github.com/NassyKova" target="_blank" rel="noreferrer">
        {" "}
      </a>
      <Image>
        <img src={GithubImage} alt="GitHub" />
        <a
          href="https://www.linkedin.com/in/nassykova/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedinImage} alt="LinkedIn" />
        </a>{" "}
      </Image>
    </Wrapper>
  );
};

export default Socials;
