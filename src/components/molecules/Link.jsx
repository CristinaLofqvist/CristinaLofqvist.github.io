import { StyledLink } from "../styles/StyledLink.jsx";
export const Link = (props) => {
  return (
    <StyledLink href={props.href} theme="red">
      {props.name}
      {props.theme}
    </StyledLink>
  );
};
