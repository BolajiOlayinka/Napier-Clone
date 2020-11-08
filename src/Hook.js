import React, { useState, useRef, useEffect } from "react";
import "./Hook.css";
// import { Link } from "react-router-dom";
import Logo from "./assets/images/Edinburgh.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Shapes from "./Shapes";
import styled from "styled-components";
import BannerBackground from "./assets/images/OpenDayBanner.jpg";

export default function Hook() {
  const [isOpen, setIsOpen] = useState();

  const toggle = () => setIsOpen(!isOpen);
  const [isShown, setIsShown] = useState(false);
  const [CoursesisShown, setCoursesIsShown] = useState(false);
  const [StudyisShown, setStudyIsShown] = useState(false);
  const [AlumniisShown, setAlumniIsShown] = useState(false);
  const [AboutisShown, setAboutIsShown] = useState(false);
  const [GlobalisShown, setGlobalIsShown] = useState(false);
  const [ResearchisShown, setResearchIsShown] = useState(false);
  let topnav = `top-menu ${isOpen}`;

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("max-width:600px");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const myNav = useRef();
  const mainText = useRef();
  // const topOfNav=myNav.current.offSetTop;

  // console.log(topOfNav)
  const [scrollDepth, setScrollDepth] = useState(0);
  function determineScroll() {
    const scrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    setScrollDepth(scrolled);
    console.log(scrolled, window.scrollY);
    if (scrolled >= 50) {
      // console.log(mainText.style)
      // mainText.paddingTop=myNav.current.offsetHeight + 'px';
      document.body.classList.add("fixedNav");
    } else {
      document.body.classList.remove("fixedNav");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", determineScroll);
    console.log(myNav.current.offsetTop);
    return function () {
      window.removeEventListener("scroll", determineScroll);
    };
  });
  return (
    <React.Fragment>
      <BannerArea>
        <PreNavbar>
          <StyledPreNavLink to="/">myNapier</StyledPreNavLink>
          <StyledPreNavLink to="/">Staff intranet</StyledPreNavLink>
          <StyledPreNavLink to="/">Jobs</StyledPreNavLink>
          <StyledPreNavLink to="/">Staff directory</StyledPreNavLink>
        </PreNavbar>

        <div className={topnav} ref={myNav}>
          <a href="/">
            <img src={Logo} alt="logo" className="logo" />
          </a>
          {(!isSmallScreen || isOpen) && (
            <React.Fragment>
              {isShown && (
                <div>I'll appear when you hover over the button.</div>
              )}
              <button onMouseEnter={() => setCoursesIsShown(true)}
              onMouseLeave={() => setCoursesIsShown(false)}
               >
                Courses
              </button>
              <button onMouseEnter={() => setStudyIsShown(true)}
              onMouseLeave={() => setStudyIsShown(false)}
               >Study with us</button>
               <button onMouseEnter={() => setGlobalIsShown(true)}
              onMouseLeave={() => setGlobalIsShown(false)}
               >Study Global</button>
               <button onMouseEnter={() => setResearchIsShown(true)}
              onMouseLeave={() => setResearchIsShown(false)}
               >Research and Innovation</button>
               <button onMouseEnter={() => setAlumniIsShown(true)}
              onMouseLeave={() => setAlumniIsShown(false)}
               >Alumni</button>
               <button onMouseEnter={() => setAboutIsShown(true)}
              onMouseLeave={() => setAboutIsShown(false)}
               >About Us</button>
        
            </React.Fragment>
          )}

          <FontAwesomeIcon
            icon={faBars}
            className="top-menu-icon"
            onClick={() => {
              toggle();
            }}
          />
          <div className="clear-fix"></div>
          {console.log(<p> You have Scrolled this far:{scrollDepth}</p>)}
        </div>
        {CoursesisShown && (
          <CoursesDiv onMouseEnter={() => setCoursesIsShown(true)} onMouseLeave={() => setCoursesIsShown(false)} >
          <SectionOne>
            <CourseLink to="/">Study areas</CourseLink>
            <CourseLink to="/">Accounting and Finance</CourseLink>
            <CourseLink to="/">Acting</CourseLink>
            <CourseLink to="/">BioSciences</CourseLink>
            <CourseLink to="/">Building and Surveying</CourseLink>
            <CourseLink to="/">Business and Management</CourseLink>
            <CourseLink to="/">Computing</CourseLink>
          </SectionOne>
          <SectionTwo>
            <CourseLink to="/">Study areas</CourseLink>
            <CourseLink to="/">Criminology Psychology and Sociology</CourseLink>
            <CourseLink to="/">Design, Photography & Advertising</CourseLink>
            <CourseLink to="/">Engineering</CourseLink>
            <CourseLink to="/">
              English, Creative Writing and Publishing
            </CourseLink>
            <CourseLink to="/">Film, Journalism and Media</CourseLink>
            <CourseLink to="/">Health and Social Care</CourseLink>
            <CourseLink to="/">Law</CourseLink>
          </SectionTwo>
          <SectionThree>
            <CourseLink to="/">Study areas</CourseLink>
            <CourseLink to="/">Accounting and Finance</CourseLink>
            <CourseLink to="/">Acting</CourseLink>
            <CourseLink to="/">BioSciences</CourseLink>
            <CourseLink to="/">Building and Surveying</CourseLink>
            <CourseLink to="/">Business and Management</CourseLink>
            <CourseLink to="/">Computing</CourseLink>
          </SectionThree>
        </CoursesDiv>
              )}
              {StudyisShown && (
                <StudySection  onMouseEnter={() => setStudyIsShown(true)} onMouseLeave={() => setStudyIsShown(false)}>
<CourseLink to="/">Study with us: 2020/2021</CourseLink>
            <CourseLink to="/">Undergraduate</CourseLink>
            <CourseLink to="/">Postgraduate</CourseLink>
            <CourseLink to="/">Online study</CourseLink>
            <CourseLink to="/">Graduate Apprenticeships</CourseLink>
            <CourseLink to="/">International students</CourseLink>
            <CourseLink to="/">Funding your studies</CourseLink>
            <CourseLink to="/">Student Life</CourseLink>
            <CourseLink to="/">Celebrating success</CourseLink>
            <CourseLink to="/">Accommodation</CourseLink>
            <CourseLink to="/">Widening Participation</CourseLink>
            <CourseLink to="/">Our research degrees</CourseLink>
</StudySection>
              )}
              {GlobalisShown && (
                <GlobalSection  onMouseEnter={() => setGlobalIsShown(true)} onMouseLeave={() => setGlobalIsShown(false)}>
<CourseLink to="/"> International students</CourseLink>
            <CourseLink to="/">International partners</CourseLink>
            <CourseLink to="/">Exchange programmes</CourseLink>
            <CourseLink to="/">Transnational education</CourseLink>
            <CourseLink to="/">Global research</CourseLink>
            
</GlobalSection>

              )}
              {ResearchisShown && (

                <ResearchSection  onMouseEnter={() => setResearchIsShown(true)} onMouseLeave={() => setResearchIsShown(false)}>
<CourseLink to="/">Business engagement</CourseLink>
            <CourseLink to="/">Impact stories</CourseLink>
            <CourseLink to="/">Our expert staff</CourseLink>
            <CourseLink to="/">Our research degrees</CourseLink>
            <CourseLink to="/">Our research environment</CourseLink>
            <CourseLink to="/">Public engagement</CourseLink>
            <CourseLink to="/">Repository</CourseLink>
            <CourseLink to="/">Research explorer tool</CourseLink>
           
</ResearchSection>
)} 
{AlumniisShown && (
  <AlumniSection  onMouseEnter={() => setAlumniIsShown(true)} onMouseLeave={() => setAlumniIsShown(false)}>


<CourseLink to="/">Alumni news</CourseLink>
            <CourseLink to="/">Benefits and Services</CourseLink>
            <CourseLink to="/">Our expert staff</CourseLink>
            <CourseLink to="/">Get involved</CourseLink>
            <CourseLink to="/">Give Something Back</CourseLink>
            
           
</AlumniSection>

              )}
              {AboutisShown && ( 
                <AboutSection  onMouseEnter={() => setAboutIsShown(true)} onMouseLeave={() => setAboutIsShown(false)}>
<CourseLink to="/">Coronavirus latest</CourseLink>
            <CourseLink to="/">Our schools</CourseLink>
            <CourseLink to="/">Our history</CourseLink>
            <CourseLink to="/">Support the university</CourseLink>
            <CourseLink to="/">Our locationt</CourseLink>
            <CourseLink to="/">University leadership</CourseLink>
            <CourseLink to="/">University governance</CourseLink>
            <CourseLink to="/">News</CourseLink>
            <CourseLink to="/">Events</CourseLink>
            <CourseLink to="/">Podcasts</CourseLink>
            <CourseLink to="/">Venue hire</CourseLink>
            <CourseLink to="/">Contact us</CourseLink>
</AboutSection>
)}
              
        <div className="bannerBody" ref={mainText}>
          <div className="mainText">
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit </h1>
          </div>
          <div className="start">
            <h5>
              <Link to="/"> Start Your Journey Here > >> >>></Link>{" "}
            </h5>
          </div>
         













           









          <div className="searchCourses">
            <div class="searchSection">
              <h5>Find a Course</h5>
              <input
                type="search"
                className="inputSearch"
                placeholder="E.g Nursing"
              />
              <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            </div>
          </div>
        </div>

        <img src={BannerBackground} alt="banner background" />

        {/* <Container>
            <div className="pageBody">
            <Shapes/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
                possimus necessitatibus, quis, soluta sapiente quasi a quidem,
                atque provident facere nisi doloremque culpa expedita eligendi.
                Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
                vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
                voluptatibus veniam ipsa! Tempora, et nemo.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
                possimus necessitatibus, quis, soluta sapiente quasi a quidem,
                atque provident facere nisi doloremque culpa expedita eligendi.
                Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
                vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
                voluptatibus veniam ipsa! Tempora, et nemo.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
                possimus necessitatibus, quis, soluta sapiente quasi a quidem,
                atque provident facere nisi doloremque culpa expedita eligendi.
                Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
                vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
                voluptatibus veniam ipsa! Tempora, et nemo.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
                possimus necessitatibus, quis, soluta sapiente quasi a quidem,
                atque provident facere nisi doloremque culpa expedita eligendi.
                Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
                vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
                voluptatibus veniam ipsa! Tempora, et nemo.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
                possimus necessitatibus, quis, soluta sapiente quasi a quidem,
                atque provident facere nisi doloremque culpa expedita eligendi.
                Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
                vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
                voluptatibus veniam ipsa! Tempora, et nemo.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
                possimus necessitatibus, quis, soluta sapiente quasi a quidem,
                atque provident facere nisi doloremque culpa expedita eligendi.
                Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
                vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
                voluptatibus veniam ipsa! Tempora, et nemo.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
                possimus necessitatibus, quis, soluta sapiente quasi a quidem,
                atque provident facere nisi doloremque culpa expedita eligendi.
                Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
                vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
                voluptatibus veniam ipsa! Tempora, et nemo.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
                possimus necessitatibus, quis, soluta sapiente quasi a quidem,
                atque provident facere nisi doloremque culpa expedita eligendi.
                Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
                vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
                voluptatibus veniam ipsa! Tempora, et nemo.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
                possimus necessitatibus, quis, soluta sapiente quasi a quidem,
                atque provident facere nisi doloremque culpa expedita eligendi.
                Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
                vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
                voluptatibus veniam ipsa! Tempora, et nemo.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
                possimus necessitatibus, quis, soluta sapiente quasi a quidem,
                atque provident facere nisi doloremque culpa expedita eligendi.
                Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
                vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
                voluptatibus veniam ipsa! Tempora, et nemo.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
                possimus necessitatibus, quis, soluta sapiente quasi a quidem,
                atque provident facere nisi doloremque culpa expedita eligendi.
                Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
                vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
                voluptatibus veniam ipsa! Tempora, et nemo.
              </p>
            </div>
          </Container> */}
      </BannerArea>
    </React.Fragment>
  );
}

const BannerArea = styled.div`
  background-image: url(${BannerBackground});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
`;
const PreNavbar = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledPreNavLink = styled(Link)`
  color: white;
  font-size: 1.125em;
  padding-top: 7px;
  margin-right: 32px;
`;
const CoursesDiv = styled.div`
  background-color: white;
  display: flex;
  width: 65%;
  margin-left:330px;
  padding-top:10px;
  padding-bottom:10px;
  
`;
const CourseLink = styled(Link)`
  display: block;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  
  color: #333333;
  line-height: 1.4;
  font-size: 1.125em;
`;
const SectionOne = styled.div`
  width:33%;
  
  padding-left: 20px;

  padding-top: 20px;
`;
const SectionTwo = styled.div`
 padding-left:10px;
  width: 33%;
  border-right:1px solid #333333;
  border-left:1px solid #333333;
`;
const SectionThree = styled.div`
  padding-left:10px;
  width: 33%;
`;

const StudySection=styled.div `
background-color: white;
padding-left:10px;
  width: 270px;
  margin-left:430px;
  padding-top:10px;
  padding-bottom:10px;
`
const GlobalSection=styled.div `
background-color: white;
padding-left:10px;
  width: 270px;
  margin-left:520px;
  padding-top:10px;
  padding-bottom:10px;
`
const ResearchSection=styled.div `
background-color: white;
padding-left:10px;
  width: 270px;
  margin-left:630px;
  padding-top:10px;
  padding-bottom:10px;
`
const AlumniSection=styled.div `
background-color: white;
padding-left:10px;
  width: 270px;
  margin-left:815px;
  padding-top:10px;
  padding-bottom:10px;
`
const AboutSection=styled.div `
background-color: white;
padding-left:10px;
  width: 270px;
  margin-left:900px;
  padding-top:10px;
  padding-bottom:10px;
`