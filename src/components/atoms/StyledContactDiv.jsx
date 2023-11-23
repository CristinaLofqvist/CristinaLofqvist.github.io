import styled from "styled-components";

const StyledContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #815832;
  justify-content: center;
  .picoverpic {
    align-items: center;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    height: 255px;
  }
  .contactBottom,
  .contactTop {
    max-height: 804px;
    max-width: 100%;
    height: auto;
  }
  img {
    overflow-clip-margin: content-box;
    overflow: clip;
  }
  .contactTop {
    opacity: 1;
  }
  .transitionimg {
    position: absolute;
    left: 0;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
  }
  p {
    padding: 3%;
    max-width: 400px;
    line-height: 150%;
    text-align: left;
  }

  .leafimg:hover,
  .transition img.contactTop:hover,
  .transitionimg.contactTop:hover {
    opacity: 0;
  }
`;
export { StyledContactDiv };
