import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --fontSuperBig: 2.5rem;
  --fontBig: 1.4rem;
  --fontMed: 1.2rem;
  --fontSmall: 1rem;
  --primary1: #AEB9F2;
  --primary2: #88AABF;
  --primary3: #A7BDD9;
  --primary4: #5b666c;
  --neutral1: #F0F2F2;
  --neutral2: #BDD9F2;}
* {
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
}

body{
  margin: 0;
  padding: 0;

  h1{
    font-size: 2rem;
    font-weight: 600;
    color: var(--white);
  }

  h3{
    font-size: 1.1;
    font-weight: 600;
  }

  p{
    font-size: 1rem;
    color: var(--white);
  }
}
`;
