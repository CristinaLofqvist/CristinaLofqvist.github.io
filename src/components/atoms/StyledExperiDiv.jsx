import styled from "styled-components";

const StyledExperiDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
  flex-wrap: wrap;

  ul {
    text-align: left;
  }
  ul li {
    line-height: 200%;
  }
  @media only screen and (max-width: 700px) {
    td {
      padding: 0;
    }
    h3 {
      font-size: 90%;
      padding: 0;
    }
    img {
      flex: 1 1 auto;
    }
  }
`;
export { StyledExperiDiv };
