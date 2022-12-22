import React from "react";
import MainPhoto from "../../img/main_photo.JPG";

const About = () => {
    return (
        <>
            <img class="head-image" src={MainPhoto} alt="" />

            <p>
                I am (almost) a Full Stuck Developer based in Melbourne.
                <br>
                    Before coding, I worked in animation industry as a 2D Rigger
                    on different{" "}
                    <a id="link" href="https://www.imdb.com/name/nm9663771/">
                        animation series
                    </a>
                    .
                </br>
                <br>I like art, innovation, development, logic and sence.</br>
            </p>
        </>
    );
};

export default About;
