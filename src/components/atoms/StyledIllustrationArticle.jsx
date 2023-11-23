import styled from "styled-components";
//justify-content: ${(props) => (props.pushleft ? "flex-start" : "flex-end")};

const StyledIllustrationArticle = styled.div`
  font-size: 30px;
  text-align: center;
  grid-column-start: ${(props) => (props.pushleft ? "3" : "5")};
  display: flex;
  flex-direction: row;
  margin: 2em;
  h3 {
    font-size: 150%;
    padding: 2em;
    color: #fff;
    font-family: "Alice", serif;
    max-width: 25%;
    text-align: left;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
/**
 display: flex;
  align-items: center;

  h3 {
    font-size: 265%;
    padding: 1.5em;
    color: #fff;
    font-family: "Alice", serif;
    max-width: 25%;
    text-align: left;
  }

  @media only screen and (max-width: 500px) {
    padding-left: 4em;
    flex-direction: column;

    img {
      max-height: 100px;
      width: auto;
    }
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    margin: 4em;
    img {
      max-height: 200px;
      width: auto;
    }
  }
 */
export { StyledIllustrationArticle };
