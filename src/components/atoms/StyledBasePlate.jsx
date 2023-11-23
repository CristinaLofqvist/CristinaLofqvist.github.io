import styled from "styled-components";

const StyledBasePlate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  p {
    font-family: "Alice", serif;
    font-size: 70%;
  }

  .sketch {
    max-height: 500px;
    max-width: 100%;
    height: auto;
  }
  .typewriter {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .typewriter img {
    max-width: 600px;
    width: 100%;
    height: auto;
    z-index: 1000;
    max-height: 400px;
  }

  .education {
    display: flex;
    justify-content: center;
    width: 20em;
    height: 12em;
    background-color: #f66154;
    text-align: center;
    opacity: 1;
    transition: 0.3s;
  }
`;
export { StyledBasePlate };
