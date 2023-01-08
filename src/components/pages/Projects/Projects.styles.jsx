import styled from "styled-components";

export const Wrapper = styled.div``;

export const BlogImage = styled.img`
    width: 30vw;

  margin-left: auto;
  margin-right: auto;
  margin-top: 2vw;
  border: 2px solid black;
  border-radius: 10%;
  :hover {
    opacity: 40%;
    transition: 0.3s;
    transform: scale(1.1);
  }



`

export const BlogPost = styled.div`
    width: 30vw;
  margin-left: auto;
  margin-right: auto;
  


  p {
    padding: 0.5vw;
    color: black;
  }

`;

export const ProjectContent = styled.div`
  border: 2px dotted $primary1;
  padding: 1vw;
  margin: 0.5vw;
  a:link {
    text-decoration: none;
  }
  h2 {
    text-shadow: none;
    text-decoration: none;
  }
  h5 {
    font-size: 0.7em;
    color: #5b666c;
    margin: 1vw;
  }
`;

export const Project = styled.div``;

export const ProjectImage = styled.img`
  width: 200px;
  border-radius: 25%;
  :hover {
    opacity: 40%;
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

// // Blog
// div.blog-post {

//     .picture-post {
//     display: flex;
//         img {

//         p {

//         }

//         @media screen and (max-width: 600px) {
//             width: 40%;
//             object-fit: contain;
//         }

//         @media screen and (max-width: 800px) {
//             width: 30%;
//             object-fit: contain;
//         }
//         }
//         p {
//             padding: 0.5vw;
//             color: black;
//         }
//         img:hover {
//         @include hover_img;
//         }
//     }
// }
