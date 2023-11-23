import { StyledButton } from "../atoms/StyledButton.jsx";

export const Button = (props) => {
  return (
    <StyledButton class={props.class} theme={props.theme}>
      {props.children}
    </StyledButton>
  );
};

/** onClick={() => navigate("#portfolio-div")} */
