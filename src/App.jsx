import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

import GlobalStyles from './components/atoms/theme/GlobalStyles.jsx';
import { StyledHeader } from './components/atoms/StyledHeader.jsx';
import { StyledFooter } from './components/atoms/StyledFooter.jsx';
import BasePlate from './components/molecules/BasePlate.jsx';
import Breadcrumbs from './components/molecules/Breadcrumb.jsx';
import { StyledButton } from './components/atoms/StyledButton.jsx';
import Navigation from './components/molecules/NavigationSpan.jsx';
import FlexStartNavigation from './components/molecules/FlexStartNavigationSpan.jsx';
import NoFlexNavigation from './components/molecules/NoFlexNavigationSpan.jsx';
import SkillsPlate from './components/molecules/SkillsPlate.jsx';
import SkillsAbout from './components/molecules/SkillsAbout.jsx';
import PitchDiv from './components/molecules/PitchDiv.jsx';
import ExperiDiv from './components/molecules/ExperiDiv.jsx';
import ContactDiv from './components/molecules/ContactDiv.jsx';
import TableDescriptionDiv from './components/molecules/TableDescriptionDiv.jsx';
import TableDiv from './components/molecules/TableDiv.jsx';
import { StyledIllustrationPlate } from './components/atoms/StyledIllustrationPlate.jsx';
import { StyledIllustrationArticle } from './components/atoms/StyledIllustrationArticle.jsx';
import FlexWrapperColumn from './components/molecules/FlexWrapperColumn.jsx';
import { StyledFlexWrapper } from './components/atoms/StyledFlexWrapper.jsx';
import { StyledMain } from './components/atoms/StyledMain.jsx';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Helmet>
        <title>Porfolio Cristina Löfqvist</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alice&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Cristina Löfqvist</title>
      </Helmet>
      <StyledHeader id="frontHeader">
        <h3>Cristina Elin Löfqvist</h3>
        <h1>Webb developer</h1>
      </StyledHeader>
      <StyledMain id="main">
        <Breadcrumbs>
          {' '}
          <li>
            <Link to="#main">Home</Link>
          </li>
          <div className="LittleSideNote">
            <p>Copyright Cristina Löfqvist</p>
          </div>
        </Breadcrumbs>
        <Navigation>
          <StyledButton theme="blackleft" className="push_right">
            <Link to="#portfolio-div" smooth>
              {' '}
              Portfolio
            </Link>
          </StyledButton>
        </Navigation>
        <BasePlate>
          <NoFlexNavigation>
            <StyledButton theme="red" className="center">
              <Link to="#education-div" smooth>
                {' '}
                Education
              </Link>
            </StyledButton>
          </NoFlexNavigation>
          <p>Photocred typewriter:Photo by Luca Onniboni on Unsplash</p>
        </BasePlate>
        <FlexStartNavigation>
          <StyledButton theme="blackright" className="push_left">
            <Link to="#illustration-div" smooth>
              {' '}
              Illustrations
            </Link>
          </StyledButton>
        </FlexStartNavigation>
        <SkillsPlate>
          <SkillsAbout></SkillsAbout>
        </SkillsPlate>
        <PitchDiv>
          <ExperiDiv>
            <li>Degree in webbdevelopment</li>
            <li>Three years working experience of software development</li>
            <li>Bachelorsdegree in International Relations</li>
            <li>
              Experienced investigator in international law within Social
              security
            </li>
          </ExperiDiv>
          <ContactDiv></ContactDiv>
        </PitchDiv>
        <Breadcrumbs>
          <li>
            <Link to="#main">Home</Link>{' '}
          </li>
          <li>
            <Link to="#portfolio-div">Portfolio</Link>
          </li>
        </Breadcrumbs>
        <TableDescriptionDiv
          title="Portfolio"
          paragraph="List of developed websites"
          id="portfolio-div"
          theme="white"
        ></TableDescriptionDiv>
        <TableDiv>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>URL</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Guestbook</td>
              <td>Developed in PHP and SQL</td>
              <td>
                <a
                  href="http://studenter.miun.se/~crlo1900/dt093g/labb3/"
                  target="_blank"
                >
                  ~crlo1900/dt093g/labb3/
                </a>
              </td>
            </tr>
            <tr>
              <td>Guestbook</td>
              <td>Developed in PHP</td>
              <td>
                <a
                  href="http://studenter.miun.se/~crlo1900/dt093g/Projekt/index.php"
                  target="_blank"
                >
                  guestbook
                </a>
              </td>
            </tr>
            <tr>
              <td>Blog</td>
              <td>Developed with React</td>
              <td>
                <a href="https://www.willbur.nu" target="_blank">
                  https://www.willbur.nu
                </a>
              </td>
            </tr>
            <tr>
              <td>Webshop</td>
              <td>Small business</td>
              <td>
                <a
                  href="http://studenter.miun.se/~crlo1900/dt163g/project/index.html"
                  target="_blank"
                >
                  snickeri.ab
                </a>
              </td>
            </tr>
            <tr>
              <td>Webshop</td>
              <td>Self developed wordpress theme</td>
              <td>
                <a
                  href="https://willbur.nu/DT152G/projekarbete/"
                  target="_blank"
                >
                  DT152G/projekarbete
                </a>
              </td>
            </tr>
            <tr>
              <td>Blog and Webshop</td>
              <td>Backend developed in Node.js with mongoDB</td>
              <td>
                <a
                  href="https://cristinalofqvist.github.io/KauProject/"
                  target="_blank"
                >
                  blog-webshop
                </a>
              </td>
            </tr>
          </tbody>
        </TableDiv>
        <Breadcrumbs>
          {' '}
          <li>
            <Link to="#main">Home</Link>
          </li>
          <li>
            <Link to="#illustration-div">illustrations</Link>
          </li>
        </Breadcrumbs>
        <TableDescriptionDiv
          title="Illustrations"
          paragraph="Art works"
          theme="black"
        ></TableDescriptionDiv>
        <StyledIllustrationPlate
          className="illustrationPlate"
          id="illustration-div"
        >
          <StyledFlexWrapper className="ilustartionflexwrapper">
            <StyledIllustrationArticle
              className="illustrationArticle"
              pushleft={true}
            >
              <h3>Double exposure</h3>
              <FlexWrapperColumn
                description="info"
                hide_description="Chamonix, Brevent"
              >
                {' '}
                <img src="/IMG_6634.jpg" alt="portrait"></img>
              </FlexWrapperColumn>
            </StyledIllustrationArticle>{' '}
          </StyledFlexWrapper>

          <StyledFlexWrapper className="ilustartionflexwrapper">
            <StyledIllustrationArticle
              className="illustrationArticle"
              pushleft={false}
            >
              <h3>Landskape photography</h3>
              <FlexWrapperColumn
                description="info"
                hide_description="Contrast mix of exposure and ISO"
              >
                {' '}
                <img
                  src="/IMG_7697.JPG"
                  alt="photo of field and pink sky"
                ></img>
              </FlexWrapperColumn>
            </StyledIllustrationArticle>{' '}
          </StyledFlexWrapper>

          <StyledFlexWrapper className="ilustartionflexwrapper">
            <StyledIllustrationArticle
              className="illustrationArticle"
              pushleft={true}
            >
              <h3>Childrens illustration</h3>
              <FlexWrapperColumn
                description="info"
                hide_description="Character"
              >
                {' '}
                <img src="/Jesaia.png" alt="young boy illustartion"></img>
              </FlexWrapperColumn>
            </StyledIllustrationArticle>
          </StyledFlexWrapper>

          <StyledFlexWrapper className="ilustartionflexwrapper">
            <StyledIllustrationArticle
              className="illustrationArticle"
              pushleft={false}
            >
              <h3>Digital illustration</h3>
              <FlexWrapperColumn
                description="info"
                hide_description="Illustration of maountain road"
              >
                {' '}
                <img
                  src="/Untitled-3.png"
                  alt="Digital illustration of mountain road"
                ></img>
              </FlexWrapperColumn>
            </StyledIllustrationArticle>{' '}
          </StyledFlexWrapper>

          <StyledFlexWrapper className="ilustartionflexwrapper">
            <StyledIllustrationArticle
              className="illustrationArticle"
              pushleft={true}
            >
              <h3>Floral photography</h3>
              <FlexWrapperColumn
                description="info"
                hide_description="Depth of sharpness"
              >
                {' '}
                <img src="/flora.JPG" alt="Closeup photo of flower"></img>
              </FlexWrapperColumn>
            </StyledIllustrationArticle>{' '}
          </StyledFlexWrapper>

          <StyledFlexWrapper className="ilustartionflexwrapper">
            <StyledIllustrationArticle
              className="illustrationArticle"
              pushleft={false}
            >
              <h3>Logotype</h3>
              <FlexWrapperColumn
                description="info"
                hide_description="Custom made"
              >
                {' '}
                <img src="/Logo4.png" alt="logotype"></img>
              </FlexWrapperColumn>
            </StyledIllustrationArticle>
          </StyledFlexWrapper>

          <StyledFlexWrapper className="ilustartionflexwrapper">
            <StyledIllustrationArticle
              className="illustrationArticle"
              pushleft={true}
            >
              <h3>Digital character illustration</h3>
              <FlexWrapperColumn
                description="info"
                hide_description="Winter child"
              >
                {' '}
                <img src="/winterChild.png" alt="logotype"></img>
              </FlexWrapperColumn>
            </StyledIllustrationArticle>
          </StyledFlexWrapper>
        </StyledIllustrationPlate>
        <Breadcrumbs>
          <li>
            <Link to="#main">Home</Link>{' '}
          </li>
          <li>
            <Link to="#education-div">Courses</Link>
          </li>
        </Breadcrumbs>
        <TableDescriptionDiv
          id="education-div"
          title="Finished Courses"
          paragraph=""
          theme="white"
        ></TableDescriptionDiv>
        <TableDiv>
          <thead>
            <tr>
              <td>University</td>
              <td>Course</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mittuniversitetet</td>
              <td>Webbdesign för CMS</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>WebbutvecklingIII</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>WebbutvecklingII</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>WebbutvecklingII</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>WebbutvecklingI</td>
            </tr>
            <tr>
              <td>Karlstad Universitet</td>
              <td>Tillämpad programmering</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>Javascriptbaserad webbutveckling</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>Introduktion till programmering i JavaScript</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>Databaser</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>Projektledning</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>Digital bildbehandling för webb</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>Typografi och form för webb</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>Programmering I C#.net</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>Webbanvändbarhet</td>
            </tr>
            <tr>
              <td>Mittuniversitetet</td>
              <td>Affärsplaner och Kommersialisering</td>
            </tr>
            <tr>
              <td>Udemy</td>
              <td>The Complete React Native + Hooks Course</td>
            </tr>
            <tr>
              <td>Udemy</td>
              <td>The Ultimate React Course 2023: React, Redux & More</td>
            </tr>
          </tbody>
        </TableDiv>
        <Breadcrumbs>
          <li>
            <Link to="#main">Home</Link>{' '}
          </li>
          <li>
            <Link to="#experi-div">Experience</Link>
          </li>
        </Breadcrumbs>
        <TableDescriptionDiv
          title="Experience"
          paragraph="From work"
          theme="white"
        ></TableDescriptionDiv>
        <TableDiv id="experi-div">
          <thead>
            <tr>
              <td>Start date</td>
              <td>Company</td>
              <td>Position</td>
              <td>End date</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021-06-12</td>
              <td>OmegaPoint</td>
              <td>Webbutvecklare</td>
              <td>--</td>
            </tr>
            <tr>
              <td>2012-06-12</td>
              <td>Försäkringskassan</td>
              <td>Utredare</td>
              <td>2021</td>
            </tr>
            <tr>
              <td>2009-01-04</td>
              <td>Peaceworks Latinamerika</td>
              <td>Administratör, Styrelseledamot</td>
              <td>210-01-04</td>
            </tr>
            <tr>
              <td>2008-10-01</td>
              <td>WWF</td>
              <td>Voluntary worker</td>
              <td>2008-11-01</td>
            </tr>
            <tr>
              <td>2007-01-30</td>
              <td>Chamonix Café Grand Centrale</td>
              <td>Frukostvärdinna</td>
              <td>2008-11-01</td>
            </tr>
          </tbody>
        </TableDiv>
      </StyledMain>
      <StyledFooter>
        <a href="https://www.facebook.com/cristina.lofqvist">
          <img
            className="socialmediaicon"
            src="/facebook.png"
            alt="icon of facebooklogo"
          />
        </a>
        <a href="https://www.linkedin.com/in/cristina-l%C3%B6fqvist-34936b53/">
          <img
            className="socialmediaicon"
            src="/linkedin.png"
            alt="icon of linkedin"
          />
        </a>
      </StyledFooter>
    </BrowserRouter>
  );
}

export default App;
