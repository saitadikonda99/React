import React from 'react';
import './Mycomponent.css';
import { Link as Scroll } from 'react-scroll';
import Mycomponent from './Mycomponent.js';
import { SM } from './ContactMe.js';
import './Profile.css';
import saiImage from './images/sai.jpeg';

export default function Profile() {

    return (
        <>
        <div className="Profile-text">
        <h1>Hyy There,</h1>
        <h1> I am Tadikonda Sai Manikanta </h1>
        <div className="Profile-text-inner">

        {/* typing animation */}
        <Mycomponent />
         
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
            <img className="Profile-photo1" src={saiImage} alt="saitadikonda" />
      </div>
      </>
    );
}