import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20 px;
  bottom: 10;
`;

export const Content = styled.div`
  position: absolute;

  margin: 20px;
  bottom: 8px;
  right: 16px;
  z-index: 10;
  opacity: 0.2;
  font-family: "Libre Baskerville", serif;
`;
