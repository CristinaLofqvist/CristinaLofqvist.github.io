import { StyledSkillsAbout } from "../atoms/StyledSkillsAbout.jsx";

export default function SkillsAbout(props) {
  return (
    <StyledSkillsAbout id="skills">
      {props.children}
      <div id="skills">
        <div>
          <p>Skills</p>
        </div>
        <div>
          <h1>UI/UX Design</h1>
          <h1>Web Accessibility</h1>
          <h1>Front End</h1>
          <h1>Back End</h1>
        </div>
      </div>
      <div id="about">
        <p>
          I am an easy to work with, devoted developer with passion to learn and
          a great service mind. You are welcome to scroll and check out my
          recent work and studies.
        </p>
        <div id="more">
          <span id="verticalLine"></span>
          <h1>More</h1>
        </div>
      </div>
    </StyledSkillsAbout>
  );
}
