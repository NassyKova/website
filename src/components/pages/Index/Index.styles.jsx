import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 3vw 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  margin: 2em 5em 2em;
  font-size: 25px;

  a:link {
    color: var(--primary4);
  }
  a:hover {

    background-color: var(--primary1);
  }
  a:visited {
    color:  var(--primary4);
  }
  @media screen and (max-width: 600px) {
    margin: 1em;
  }

  @media screen and (max-width: 820px) {
    margin: 1em;
  
  }
  @media screen and (max-width: 1280px) {
    margin: 1em;
 
  }
`;
export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 1vw;
  :hover {
    opacity: 40%;
    transition: 0.3s;
    transform: scale(1.1);
  }
`;
