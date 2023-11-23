import { StyledExperiDiv } from "../atoms/StyledExperiDiv.jsx";

export default function ExperiDiv(props) {
  return (
    <StyledExperiDiv className="experi_div">
      <img
        src="/woodsPortrait.png"
        alt="portrait"
        id="portrait"
        max-width="700px"
        height="auto"
      ></img>
      <h1>About</h1>
      <ul>{props.children}</ul>
    </StyledExperiDiv>
  );
}
