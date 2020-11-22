import React, { useState, useRef,useEffect } from "react";
import styled from "styled-components";
import './Header.css';
import { Link } from "react-router-dom";
import Logo from "../assets/images/Edinburgh.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!isOpen);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [CoursesisShown, setCoursesIsShown] = useState(false);
  const [StudyisShown, setStudyIsShown] = useState(false);
  const [AlumniisShown, setAlumniIsShown] = useState(false);
  const [AboutisShown, setAboutIsShown] = useState(false);
  const [GlobalisShown, setGlobalIsShown] = useState(false);
  const [ResearchisShown, setResearchIsShown] = useState(false);
  const myNav = useRef();
//   const mainText = useRef();
  let topnav = `top-menu ${isOpen}`;

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

  return (
    <React.Fragment>
     <PreNavbar>
        <StyledPreNavLink to="/">myNapier</StyledPreNavLink>
        <StyledPreNavLink to="/">Staff intranet</StyledPreNavLink>
        <StyledPreNavLink to="/">Jobs</StyledPreNavLink>
        <StyledPreNavLink to="/">Staff directory</StyledPreNavLink>
      </PreNavbar>
      <NavUnderlay>

      </NavUnderlay>
      <NavContainer ref={myNav} className={topnav}>
     
        <NavSection>
        <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          {(!isSmallScreen || isOpen) && (
          <React.Fragment>
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
        </NavSection>
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
      </NavContainer>
    </React.Fragment>
  );
}

const PreNavbar = styled.div`
  display: flex;
  justify-content: center;
  font-weight:400;
  height:42px;
  a{
      margin-right:32px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
`;
const NavSection = styled.div`
background-color:white;
position:relative;
width:100%;
height: 71px;
    padding: 0.4em 0 0.2em 0.6em;
    
    z-index:1;
    margin-top:-71px;
   
margin-left:50px;
transition: all 400ms;

:before{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    left: -44px;
    border-bottom: 71px solid transparent;
    border-right: 44px solid white;
}

 
`;
const StyledPreNavLink = styled(Link)`
  color: white;
  font-size: 1.125em;
  padding-top: 7px;
  margin-right: 32px;
`;

const NavContainer = styled.div`



@media(min-width:76em){
    height: 71px;
    position:relative;

margin:auto;
width:1200px;

   ${'' /* width:1200px;
   max-width:1200px;
   margin:auto;
    margin-left:75px; */}
   
}
`;
const NavUnderlay = styled.div `
width:40%;
margin-left:auto;
height:71px;
background-color:white;
position:relative;
z-index:0;

`
const CoursesDiv = styled.div`
  background-color: white;
  display: flex;
  width: 65%;
  margin-left:330px;
  padding-top:10px;
  padding-bottom:10px;
  position:absolute;
  z-index:10;
  
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
  position:absolute;
  z-index:10;
`
const GlobalSection=styled.div `
background-color: white;
padding-left:10px;
  width: 270px;
  margin-left:520px;
  padding-top:10px;
  padding-bottom:10px;
  position:absolute;
  z-index:10;
`
const ResearchSection=styled.div `
background-color: white;
padding-left:10px;
  width: 270px;
  margin-left:630px;
  padding-top:10px;
  padding-bottom:10px;
  position:absolute;
  z-index:10;
`
const AlumniSection=styled.div `
background-color: white;
padding-left:10px;
  width: 270px;
  margin-left:815px;
  padding-top:10px;
  padding-bottom:10px;
  position:absolute;
  z-index:10;
`
const AboutSection=styled.div `
background-color: white;
padding-left:10px;
  width: 270px;
  margin-left:900px;
  padding-top:10px;
  padding-bottom:10px;
  position:absolute;
  z-index:10;
`
