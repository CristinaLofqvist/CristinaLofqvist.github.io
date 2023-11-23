import { StyledBasePlate } from "../atoms/StyledBasePlate.jsx";

export default function BasePlate(props) {
  return (
    <StyledBasePlate className="base">
      <img
        src="/frontendLarge.jpg"
        alt="illustration"
        className="sketch"
        title="Cpoyright Cristina Löfqvist"
      />
      <div className="typewriter">
        <img
          src="/luca-onniboni-4v9Kk01mEbY-large.png"
          alt="typemwriter"
          id="typewriterImg"
        />
        {props.children}
      </div>
    </StyledBasePlate>
  );
}
