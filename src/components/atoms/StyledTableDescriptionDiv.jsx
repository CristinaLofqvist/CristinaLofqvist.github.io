import styled from "styled-components";

const theme = {
  black: {
    background: "#0A0000",
    color: "white",
  },
  white: {
    background: "white",
    color: "black",
  },
};

const StyledTableDescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: black;
  background-color: ${(props) => theme[props.theme].background};
  color: ${(props) => theme[props.theme].color};
`;
export { StyledTableDescriptionDiv };
