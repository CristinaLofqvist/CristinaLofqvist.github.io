import styled from "styled-components";

const StyledSkillsAbout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 20%;

  #skills {
    display: block;
  }
  #skills p {
    text-align: left;
    font-size: 120%;
    font-weight: 500;
  }
  #skills h1 {
    font-size: 300%;
    text-align: left;
  }
  #about {
    align-items: start;
    display: flex;
    flex-direction: column;
  }
  #about p {
    max-width: 400px;
    line-height: 150%;
    text-align: left;
    font-weight: 500;
  }

  #more {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 20%;
  }
  #more h1 {
    font-size: 300%;
  }
  #verticalLine {
    border-left: 2px solid;
    height: 100px;
    padding: 6%;
  }

  @media only screen and (max-width: 750px) {
    #skills {
      padding-left: 1.5em;
      flex-direction: column;
    }
  }
`;
export { StyledSkillsAbout };
