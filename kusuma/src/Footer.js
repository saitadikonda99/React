import React from 'react'
import './Footer.css'
import gmailImage from './images/gmail.png'
import SM from './SM';

 const Footer = () => {
  return (
    <>
        <div className="footer-box">
            <div className="one-one">
                   <div className="thanks">
                    <h1> SAI's PORTFOLIO </h1>
                    <p> Thanks for checking out my portfolio website.
                         Let's connect and make great things happen.</p>
                         <p>Soar with me! 🚀 Reach out via social media or chat!</p>
                   </div>
                   <div className="contact-details">
                    <div className="contact-info">
                    <h1> Contact Info </h1>
                    </div>
                    <div className="contact-gmail">
                    <a href="mailto:saiitadikonda7@gmail.com">
                    <img src={gmailImage} alt="gmailimage" />
                        </a>
                        <a className='mailto' href="mailto:saiitadikonda7@gmail.com"> 
                        <p>saiitadikonda7@gmail.com</p>
                        </a>
                    </div>
                    <div className="sm">
                    <SM/>
                    </div>
                   </div>
            </div>
            <div className="line"></div>
            <div className="two-two">
                <div className="developed">
                 <p> Designed and Developed by Tadikonda Sai Manikanta </p>
                </div>
            </div>
        </div>
    </>
  
  )
}

export default Footer; 
