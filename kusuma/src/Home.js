import React from "react";
import myImage from './images/Dev.png'
import { Link } from 'react-router-dom';
import './Home.css'
import { useEffect, useState } from 'react';

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
      <div className="container">
        <nav className="navigation">
          <div className="name">
          <img className="nav-img" src={myImage} alt="saitadikonda" />
            <h1> Tadikonda sai manikanta </h1>
          </div>
          <div className="pages">
            <div className="projects"><h4>projects</h4></div>
            <div className="techStacks"><h4>techStacks</h4></div>
            <div className="experience"><h4>experience</h4></div>
            <Link to="/ContactMe">
              <button className="ContactMe">
                Contact Me
              </button>
            </Link>
          </div>
        </nav>

        <section id="sectionId" className={`section-text ${isSectionHidden ? 'section-hidden' : ''}`}>
          <h1 className="know-more1">Know more.</h1>
          <h1 className="know-more2">Outside or in.</h1>
    </section>
    <div className="sample"></div>
      </div>
    );
}


export default Home;