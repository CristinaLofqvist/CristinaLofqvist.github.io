import { StyledFlexStartNavigationSpan } from "../atoms/StyledFlexStartNavigationSpan.jsx";

export default function FlexStartNavigation(props) {
  return (
    <StyledFlexStartNavigationSpan className="navigation">
      {props.children}
    </StyledFlexStartNavigationSpan>
  );
}
