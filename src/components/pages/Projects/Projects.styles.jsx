import styled from "styled-components";

export const BlogImage = styled.img`
  width: 25vw;
  border-radius: 10%;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;

  :hover {
    opacity: 40%;
    transition: 0.3s;
    transform: scale(1.1);
  }
  @media screen and (max-width: 600px) {
    width: 15em;
  }

  @media screen and (max-width: 820px) {
    width: 10em;
  }
  @media screen and (max-width: 1280px) {
    width: 12em;

  }
`;

export const BlogPost = styled.div`
  margin-top: 3vw;
  border-bottom: 1px solid black;
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3em;
  transition: 0.3s;

  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: black;
  }

  p {
    text-align: justify;
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    margin: 1em;
  }

  @media screen and (max-width: 820px) {
    margin: 1em;
    width: auto;
  }

  @media screen and (max-width: 1280px) {
    margin: 5em;
    width: auto;
  }
`;

export const GithubRepo = styled.div`
  img {
    display: inline-block;
    width: 30px;
    margin-bottom: 10px;
    opacity: 0.2;
    transition: 0.3s;

    :hover {
      opacity: 0.9;
      filter: drop-shadow(2px 2px grey);
    }
    @media screen and (max-width: 800px) {
      width: 20px;
    }
  }
`;
