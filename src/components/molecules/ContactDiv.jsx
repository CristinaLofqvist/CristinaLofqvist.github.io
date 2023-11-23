import { StyledContactDiv } from "../atoms/StyledContactDiv.jsx";

export default function ContactDiv(props) {
  return (
    <StyledContactDiv className="experi_div">
      <div className="picoverpic">
        <img
          src="./Asset-28.png"
          alt="illustration of contactlink"
          className="contactBottom"
        ></img>

        <img
          src="./Asset-33.png"
          alt="illustration of contactlink"
          className="contactTop transitionimg"
        ></img>
      </div>
      <p id="white">
        If you are interested in my work or want to hear more about what I can
        offer, please contact me at email: cristina.lofqvist@gmail.com or
        telephone: +46 70 5897135.
      </p>
    </StyledContactDiv>
  );
}
