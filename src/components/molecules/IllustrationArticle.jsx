import { StyledIllustrationArticle } from "./atoms/styles/StyledIllustrationArticle.jsx.js";

export default function IllustrationArticle(props) {
  console.log(props);
  return (
    <StyledIllustrationArticle
      pushleft={props.pushleft}
      className="illustrationArticle"
    >
      <article>{props.children}</article>
    </StyledIllustrationArticle>
  );
}
