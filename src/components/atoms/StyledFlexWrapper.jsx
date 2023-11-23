import styled from "styled-components";

const StyledFlexWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 10px;
`;
export { StyledFlexWrapper };

/**display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.pushleft ? "flex-start" : "flex-end")};
  padding: ${(props) => (props.pushleft ? "0" : "3.5em")}; */
