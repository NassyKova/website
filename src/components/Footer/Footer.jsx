import React from "react";
import { Content } from "./Footer.styles";
import { GithubRepo } from "../pages/Projects/Projects.styles";
import GithubImage from "../../img/logos/GitHub-Mark-64px.png";

const Footer = () => {
  return (
    <Content>
      @ 2022 Nassy Kova (Anastasia Dyakova)
      <GithubRepo>
        <a
          href="https://github.com/NassyKova/website"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GithubImage} alt="GitHub" />
        </a>
      </GithubRepo>
    </Content>
  );
};

export default Footer;
