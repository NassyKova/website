import styled from "styled-components";

export const Wrapper = styled.div``;

export const BlogImage = styled.img`
  width: 20vw;
  border-radius: 10%;

  margin-left: auto;
  margin-right: auto;
  :hover {
    opacity: 40%;
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

export const BlogPost = styled.div`
  margin-top: 2vw;
  border-bottom: 1px solid black;
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;

  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: black;
  }

  p {

    text-align: justify;
  }
`;

export const GithubRepo = styled.div`
img{
  width: 30px;
}

`