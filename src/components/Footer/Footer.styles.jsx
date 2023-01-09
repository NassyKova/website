import styled from "styled-components";


export const Content = styled.div`

    white-space: nowrap;

  position: fixed;
  bottom: 0px;
  right: 16px;
  z-index: 10;
  opacity: 0.2;
  font-family: "Libre Baskerville", serif;

  @media screen and (max-width: 800px) {
    margin: 3px;
    bottom: 2px;
    font-size: 10px;
  }
`;
