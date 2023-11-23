import { StyledNavigationSpan } from "../atoms/StyledNavigationspan.jsx";

export default function Navigation(props) {
  return (
    <StyledNavigationSpan className="navigation" flex={props.flex}>
      {props.children}
    </StyledNavigationSpan>
  );
}
