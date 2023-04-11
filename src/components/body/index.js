import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
  html {
  scroll-behavior: smooth;
}

#particles-js {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -100;
}
.slick-prev:before{
color: #999999;
}
.slick-next:before{
  color: #999999;

}
  
`;
