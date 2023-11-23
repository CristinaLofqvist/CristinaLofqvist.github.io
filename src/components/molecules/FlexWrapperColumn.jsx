import { StyledFlexWrapperColumn } from "../atoms/StyledFlexWrapperColumn.jsx";

export default function FlexWrapperColumn(props) {
  return (
    <StyledFlexWrapperColumn className="flexWrapperCol">
      {props.children}
      <div className="infoDrop">
        <div className="vlInfo">
          <span className="vl"></span>
          <p>Info</p>
        </div>
        <p className="hide">{props.hide_description}</p>
      </div>
    </StyledFlexWrapperColumn>
  );
}
