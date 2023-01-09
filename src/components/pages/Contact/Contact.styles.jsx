import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  color: black;
  font-size: 30px;

  a:link {
    color: black;
    font-family: "Libre Baskerville", serif;
    text-decoration: none;
  }
  a:visited {
    color: black;
  }
  a:hover {
    color: var(--primary1);
    text-decoration: underline;
  }
`;
