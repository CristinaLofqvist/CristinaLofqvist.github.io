import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    width:100%;
    flex-wrap: wrap;
    min-width: fit-content;
    box-sizing: border-box; 
    
}
    #root {
    text-align: center;
    height: 100%;
   }

    .educationPlate a .kurser thead td, form, h3, h4, h5, h6, li, p, .illustrationPlate, .portfolioPlate {
        font-family: "Poppins", sans-serif;
    }

    .illustrationArticle h3, .kurser td, a, h1, h2 {
        font-family: "Alice", serif
    }
    @media only screen and (max-width: 630px) {
    padding-left: 1.5em;
    flex-direction: column;

    font-size: 90%;
  }
`;

export default GlobalStyles;

/** 
      display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: auto;
    border: 5px solid red;
 width:content-fit;*/
