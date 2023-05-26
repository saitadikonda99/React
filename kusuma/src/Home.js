import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import React from "react";
import myImage from './images/Dev.png'
import './Home.css'
import { useEffect, useState } from 'react';
import { SM } from './ContactMe.js';
import Typed from "react-typed";




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
                offset={-140}
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

            <Link to="/ContactMe">
              <button className="ContactMe">
                Contact Me
              </button>
            </Link>
          </div>
        </nav>

        <section id="sectionId" className={`section-text ${isSectionHidden ? 'section-hidden' : ''}`}>
          <h1 className="know-more1">Know more.</h1>
          <h1 className="know-more2">Scroll Down.</h1>
    </section>
    <div id="Profile" >

      <div className="Profile-text">
        <h1>Hyy There,</h1>
        <h1> I am Tadikonda Sai Manikanta </h1>
        <div className="Profile-text-inner">

        {/* typing animation */}

        <div className="animated-typing">
<Typed
  strings={[
    "I'm a Full Stack Developer",
    "I Love Software Development",
    "I Love All My Subscribers",
  ]}
  typeSpeed={150}
  backSpeed={100}
  loop
/>
</div>


        </div>
        <div >

        <Scroll
              activeClass="active"
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <button className='Profile-text-button'> About Me</button>
            </Scroll>

        </div>
        <div className="About-links">
          <SM />
        </div>
      </div>
      <div className="Profile-photo">

      </div>

    </div>

    <div id="AboutMe">
    <center> <h1 > AboutMe. </h1></center>
    </div>

      <div id="Projects">
      <center> <h1 > Projects. </h1></center>

      </div>
      <div id="Experience">
      <center> <h1 > Experience. </h1></center>
      </div>
      </div>

      <footer>
          <center> <h1> footer. </h1> </center>
      </footer>
      </>
    );
}

export default Home;
