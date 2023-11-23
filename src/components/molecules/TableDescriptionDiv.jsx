import { StyledTableDescriptionDiv } from "../atoms/StyledTableDescriptionDiv.jsx";

export default function TableDescriptionDiv(props) {
  return (
    <StyledTableDescriptionDiv id={props.id} theme={props.theme}>
      <h1>{props.title} </h1>
      <p>{props.paragraph}</p>
    </StyledTableDescriptionDiv>
  );
}
