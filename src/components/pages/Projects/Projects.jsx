import React, { Component } from "react";
import { Card } from "primereact/card";
import MetImage from "../../../img/Met.png";
import { BlogPost, BlogImage, GithubRepo } from "./Projects.styles";
import GithubImage from "../../../img/logos/GitHub-Mark-64px.png";
import ERDImage from "../../../img/noGeographyERD.png";
import BookshelfImage from "../../../img/bookshelf.png";

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
        src={ERDImage}
        alt="erd"
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
      ></BlogImage>
    );
    const header2 = (
      <BlogImage
        src={BookshelfImage}
        alt="erd"
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
      ></BlogImage>
    );

    return (
      <>
        {" "}
        <BlogPost>
          <a
            href="http://artworkfromthemet.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              title="The Metropolitan Museum of Art Collection API"
              style={{
                fontSize: "30px",
                textAlign: "center",
              }}
              header={header}
            >
              <p>
                <b>Hackathon team project</b>
                <br />
                Bringing the art collection from New York to your screen! The
                Metropolitan Museum of Art presents over 5000 years of art from
                all around the globe. On this website you can see available
                artwork, search for favorite artists or explore new ones, add an
                artwork to your personal favorite page.
                <br />
                Built with Javascript, React, Third Party API
              </p>
            </Card>
          </a>
          <GithubRepo>
            <a
              href="https://github.com/NassyKova/no_geography"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={GithubImage} alt="GitHub" />
            </a>
          </GithubRepo>
        </BlogPost>
        <BlogPost>
          <a
            href="https://github.com/NassyKova/no_geography"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              title="NoGeograpy, Flask app"
              style={{
                fontSize: "30px",
                textAlign: "center",
              }}
              header={header1}
            >
              <p>
                App for a tour company. Has ERDs for tours, tours' providers,
                clients. Lets search, add, delete, update tours, providers and
                clients
                <br />
                Built with Python, Flask
              </p>
            </Card>
          </a>
          <GithubRepo>
            <a
              href="https://github.com/NassyKova/no_geography"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={GithubImage} alt="GitHub" />
            </a>
          </GithubRepo>
        </BlogPost>
        <BlogPost>
          <a
            href="https://github.com/NassyKova/Bookshelf"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              title="Bookshelf Terminal App"
              style={{
                fontSize: "30px",
                textAlign: "center",
              }}
              header={header2}
            >
              <p>
                Bookshelf is your personal book library that lets you add the
                book you read, add notes to them, edit books and nots, delete
                books. <br/>
                Built with Python
              </p>
            </Card>
          </a>
          <GithubRepo>
            <a
              href="https://github.com/NassyKova/Bookshelf"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={GithubImage} alt="GitHub" />
            </a>
          </GithubRepo>
        </BlogPost>
      </>
    );
  }
}
