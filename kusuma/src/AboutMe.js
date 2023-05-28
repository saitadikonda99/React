import React from 'react';
import './AboutMe.css'
import './Footer.css'
import gmailImage from './images/gmail.png'

const AboutMe = () => {
  return (
    <>
        <div className="AboutMe-box">
            <div className="AboutMe-matter">
               <div className="AboutMe-heading">
                <h1>AboutMe</h1>
               </div>
               <div className="About-sai">
                <h1> I'm <span className='kusuma'> SAI</span> </h1> 
                <h4> Frontend DEV.</h4>
               </div>
               <div className="AboutMe-text">
                <p>Passionate software developer skilled in Java,
                     C, and React. Dedicated to crafting 
                     efficient solutions with clean, optimized 
                     code. Let's collaborate and create something 
                     amazing together.</p>
               </div>

               <div className="AboutMe-gmail">
                    <a href="mailto:saiitadikonda7@gmail.com">
                    <img src={gmailImage} alt="gmailimage" />
                        </a>
                        <a className='mailto' href="mailto:saiitadikonda7@gmail.com"> 
                        <p>saiitadikonda7@gmail.com</p>
                        </a>
                    </div>

            </div>
            <div className="AboutMe-photo">
            <div class="AboutMe-one"></div>
            <div class="AboutMe-two"></div>
            </div>
        </div>
    </>
  );
}

export default AboutMe