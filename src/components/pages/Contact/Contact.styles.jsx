import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;



`;

export const Text = styled.div`
  color: var(--primary4);
  font-size: 2em;

  a:link {
    color: var(--primary4);
    font-family: "Libre Baskerville", serif;
    text-decoration: none;
  }
  a:visited {
    color: darkgrey;
  }
  a:hover {
    color: var(--primary1);
    text-decoration:underline
  }

`;
