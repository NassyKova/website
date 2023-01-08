import React, { Component } from "react";
import { Card } from "primereact/card";
import MetImage from "../../../img/Met.png";
import { Wrapper, BlogPost, BlogImage } from "./Projects.styles";

// links: <a href="http://artworkfromthemet.netlify.app/">;
// title: "The Metropolitan Museum of Art Collection API",
// image: <img src={MetImage} alt="Met" />,

export class CardDemo extends Component {
  render() {
    const header = (
      <BlogImage
        src={MetImage}
        alt="Met"
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
      ></BlogImage>
    );

    return (
      <BlogPost>
        <Card
          title="The Metropolitan Museum of Art Collection API"
          subTitle="Subtitle"
          header={header}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </BlogPost>
    );
  }
}
