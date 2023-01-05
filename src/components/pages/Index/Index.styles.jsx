import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 3vw 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Content = styled.div`
  margin: 3vw 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 600px) {
    margin: 3vw 2vw;
  }

  @media screen and (max-width: 800px) {
    margin: 3vw 3vw;

    p {
      margin: 1em;
      text-align: center;
    }
    #link {
      color: green;
      background-color: red;
      :hover {
        background-color: var(--lightblue);
      }
      :visited {
        background-color: var(--lightblue);
      }
    }
  }
`;
export const Text = styled.div``;
export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 1vw;
`;
