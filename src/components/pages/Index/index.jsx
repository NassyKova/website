import React from "react";
import MainPhoto from "../../../img/main_photo.JPG";
import { Wrapper, Image, Text } from "./Index.styles";

const About = () => {
  return (
    <Wrapper>
      <Image src={MainPhoto} alt="mainPhoto"></Image>

      <Text>
        Hi there! I am Nassy, a Junior Software Developer based in
        Melbourne/Naarm <br /><br />I believe that technology is an amazing powerful tool
        that will change the future for the better. <br /><br />I am passionate about
        increasing inclusivity and diversity in the tech industry 👩‍💻<br /><br /> Before
        coding I worked in animation industry as a{" "}
        <a
          href="https://www.imdb.com/name/nm9663771/"
          target="_blank"
          rel="noreferrer"
        >
          2D Rigger
        </a>
        {" "} (creating digital puppets). I love animation for being able to bring
        anything to life, give it a character, a voice and a point of view 🌟<br /> <br />I
        like art, innovation, development, logic and sense. Looking forward to
        emerge in the tech community and meet great people on the way 💚
      </Text>
    </Wrapper>
  );
};

export default About;
