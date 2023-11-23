import { StyledTableDiv } from "../atoms/StyledTableDiv.jsx";

export default function TableDiv(props) {
  return (
    <StyledTableDiv className={props.class}>
      <div className="table_wrapper">
        <table>{props.children}</table>
      </div>
      {props.childreen}
    </StyledTableDiv>
  );
}
