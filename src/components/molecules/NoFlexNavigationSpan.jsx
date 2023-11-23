import { StyledNoFlexNavigation } from "../atoms/StyledNoFlexNavigationSpan.jsx";

export default function NoFlexNavigation(props) {
  return (
    <StyledNoFlexNavigation className="navigation" flex={props.flex}>
      {props.children}
    </StyledNoFlexNavigation>
  );
}
