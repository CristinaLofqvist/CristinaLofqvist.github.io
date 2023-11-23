import { StyledPitchDiv } from "../atoms/StyledPitchDiv.jsx";

export default function PitchDiv(props) {
  return (
    <StyledPitchDiv className="pitch_div">{props.children}</StyledPitchDiv>
  );
}
