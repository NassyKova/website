import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
img{
position: relative;
  width: 40px;
  margin: 10px;
  animation: animateSocials 0.3s;
  opacity: 0.2;

:hover {
    opacity: 0.9;
    filter: drop-shadow(2px 2px grey);
  }
/* 
  @keyframes animateSocials {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  } */
}
`;
