import React, { Component } from "react";
import { Card } from "primereact/card";
import MetImage from "../../../img/Met.png";
import { BlogPost, BlogImage, GithubRepo } from "./Projects.styles";
import GithubImage from "../../../img/logos/GitHub-Mark-64px.png";


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
    const header1 = (
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
      <>      <BlogPost>
        <a href="http://artworkfromthemet.netlify.app/"        target="_blank"
        rel="noreferrer">
          <Card
            title="The Metropolitan Museum of Art Collection API"
            style={{

              fontSize: "30px",
              textAlign: "center",
            }}
            header={header}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>

          </Card>
        </a>
        <GithubRepo>
        <a href="https://github.com/Wade008/hackathon" target="_blank" rel="noreferrer">
        {" "}

          <img src={GithubImage} alt="GitHub" />

      </a>
        </GithubRepo>
      </BlogPost>

    <BlogPost>
      <a href="http://artworkfromthemet.netlify.app/"        target="_blank"
      rel="noreferrer">
        <Card
          title="The Metropolitan Museum of Art Collection API"
          style={{

            fontSize: "30px",
            textAlign: "center",
          }}
          header={header1}
        >
          <p>
new text
          </p>

        </Card>
      </a>
      <GithubRepo>
      <a href="https://github.com/Wade008/hackathon" target="_blank" rel="noreferrer">
      {" "}

        <img src={GithubImage} alt="GitHub" />

    </a>
      </GithubRepo>
    </BlogPost>
    </>

  );
        }
      }