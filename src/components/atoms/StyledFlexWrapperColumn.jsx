import styled from "styled-components";

const StyledFlexWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-size: 70%;
  img {
    max-height: 350px;
    width: auto;
  }
  p {
    color: white;
  }
  .vl {
    border-left: 2px solid #fff;
    height: 50px;
  }

  .infoDrop,
  .vlInfo {
    display: flex;
    flex-direction: row;
  }

  .vlInfo {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
  }

  .vlInfo p {
    width: fit-content;
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
  }

  .vlInfo,
  .vlInfo:hover + .hide {
    opacity: 1;
  }

  .hide,
  .vlInfo:hover {
    opacity: 0;
  }

  .hide {
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
  }
`;
export { StyledFlexWrapperColumn };
