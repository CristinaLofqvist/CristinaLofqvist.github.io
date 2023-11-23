import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  flex-wrap: wrap;
  min-width: fit-content;
  box-sizing: border-box;
  background: linear-gradient(to right, #27423d, #090f0e);
  color: #fff;
  width: 100%;
  text-align: center;
  z-index: 1001;
  top: 0;

  h2 {
    font-family: "Alice", serif;
  }
  h3,
  h4,
  h5,
  h6,
  li,
  p {
    font-family: "Poppins", sans-serif;
  }
`;

export { StyledHeader };
