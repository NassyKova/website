import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  img {
    position: relative;
    width: 40px;
    margin: 10px;
    opacity: 0.2;
    
    
    :hover {
      transition: 0.3s;
      transform: translateY(-3px);
      opacity: 0.9;
      filter: drop-shadow(2px 2px grey);
    }
  }

`;
