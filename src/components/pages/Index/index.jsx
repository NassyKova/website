import React from "react";
import MainPhoto from "../../../img/main_photo.JPG";
import { Wrapper, Content, Image } from "./Index.styles";

const About = () => {
  return (
    <Wrapper>
      <Image src={MainPhoto} alt="mainPhoto"></Image>
      <Content>
        <p>
          I am (almost) a Full Stuck Developer based in Melbourne. Before
          coding, I worked in animation industry as a 2D Rigger on different{" "}
          <a id="link" href="https://www.imdb.com/name/nm9663771/" target="_blank" rel="noreferrer">
            animation series
          </a>
          I like art, innovation, development, logic and sence
        </p>
      </Content>
    </Wrapper>
  );
};

export default About;
