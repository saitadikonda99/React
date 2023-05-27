import React from 'react'
import './SM.css'
import leetCode from './images/leetcode.png';
import linkedIn from './images/linkedin.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
import github from './images/github.webp';


 function SM() {
    return (
        <>
        <div className="github">
            <a href="https://github.com/saitadikonda99" target='_blank' rel="noreferrer">
             <img className='social-img' src={github} alt="github" />
            </a>
        </div>
        <div className="leetcode">
            <a href="https://leetcode.com/saitadikonda99/" target='_blank' rel="noreferrer">
            <img className='social-img' src={leetCode} alt="leetcode" />
            </a>
        </div>
        <div className="linkedin">
            <a href="https://www.linkedin.com/in/tadikondasaimanikanta/" target='_blank' rel="noreferrer">
                <img className='social-img' src={linkedIn} alt="linkedin" />
                </a>
        </div>
        <div className="twitter">
           <a href="https://twitter.com/sai_tadikonda_" target='_blank' rel="noreferrer">
            <img className='social-img' src={twitter} alt="twitter" />
            </a>
        </div>
        <div className="instagram">
           <a href="https://www.instagram.com/_sai.you/" target='_blank' rel="noreferrer">
             <img className='social-img' src={instagram} alt="instagram" />
            </a>
        </div>
        </>
    );
 }

 export default SM;