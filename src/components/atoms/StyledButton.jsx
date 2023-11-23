import styled from "styled-components";

const theme = {
  blackleft: {
    background: "#0A0000",
    hover: "#283593",
    padding: "1% 20% 1% 1%",
  },
  blackright: {
    background: "#0A0000",
    hover: "#283593",
    padding: "1% 1% 1% 20%",
  },
  red: {
    background: "#f66154",
    hover: "#283593",
    padding: "0%",
  },
};

const StyledButton = styled.button`
  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
  background-color: ${(props) => theme[props.theme].background};
  display: inline-block;
  max-width: 100%;
  border: none;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 200%;
  font-weight: 700;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: ${(props) => theme[props.theme].padding};
  a:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  .push_right {
    padding: 1% 20% 1% 1%;
  }
  .push_left {
    padding: 1% 1% 1% 20%;
  }
  .center {
    flex-direction: column;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-size: 150%;
    font-weight: 700;
  }

  a {
    font-family: "Poppins", sans-serif;
    color: white;
    width: 100%;
    display: block;
  }
`;

export { StyledButton };
