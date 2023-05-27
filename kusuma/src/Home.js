import { Link as Scroll } from 'react-scroll';
import React from "react";
import myImage from './images/Dev.png'
import './Home.css'
import { useEffect, useState } from 'react';
import Profile from './Profile.js';
import ContactMe from './ContactMe.js';
import Footer from './Footer.js';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Experience from './Experience';

const Home = () => {
  const [isSectionHidden, setIsSectionHidden] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const scrollThreshold = 0;

      if (scrollY > scrollThreshold && !isSectionHidden) {
        setIsSectionHidden(true);
      } else if (scrollY <= scrollThreshold && isSectionHidden) {
        setIsSectionHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSectionHidden]);


    return (
      <>
      <div className="container">
        <nav className="navigation">
          <div className="name">
          <img className="nav-img" src={myImage} alt="saitadikonda" />
            <h1> Tadikonda Sai Manikanta </h1>
          </div>
          <div className="pages">
             <ul className="page-link">

              {/*  one  */}
              <li>
              <Scroll
              activeClass="active"
              to="Profile"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Profile
            </Scroll>
              </li>

                {/*  two  */}
              <li>
              <Scroll
                activeClass="active"
                to="AboutMe"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
           AboutMe
              </Scroll>
              </li>

          {/*  three  */}
              <li>
              <Scroll
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-140}
              duration={500}
            >
          Projects
            </Scroll>
              </li>

            {/*  four  */}
              <li>
                <Scroll
                activeClass="active"
                to="Experience"
                spy={true}
                smooth={true}
                offset={-140}
                duration={500}
                >
          Experience
                </Scroll>
              </li>

             </ul>

             <Scroll
              activeClass="active"
              to="ContactMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              
              <button className="ContactMe">
                Contact Me
              </button>

            </Scroll>
          </div>
        </nav>

        <section id="sectionId" className={`section-text ${isSectionHidden ? 'section-hidden' : ''}`}>
          <h1 className="know-more1">Know more.</h1>
          <h1 className="know-more2">Scroll Down.</h1>
    </section>
    <div id="Profile" >

       <Profile />
    </div>

    <div id="AboutMe">
    <AboutMe/>
    </div>

      <div id="Projects">
      <Projects />

      </div>
      <div id="Experience">
      < Experience/>
      </div>

      <div id="ContactMe">
      
      <ContactMe />


      </div>
      </div>

      <footer>
       <Footer/ >
      </footer>
      </>
    );
}

export default Home;