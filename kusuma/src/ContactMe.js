import React, { useState } from 'react';
import './ContactMe.css';
import myImage from './images/Dev.png';
import homeImage from './images/home.png';
import leetCode from './images/leetcode.png';
import linkedIn from './images/linkedin.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
import github from './images/github.webp';
import { Link } from 'react-router-dom';



const ContactMe = () => {
    const [data, setData] = useState({
        client: '',
        mail : '',
        reason : '',
    });

    const {client, mail, reason} = data;

    const handleData = (e) => {
        setData({...data,[e.target.name]:[e.target.value]});
    }

    const handleSubmit = (e) => {
            e.preventDefault();
            alert('successfully register');
            console.log(data);
    }

    return (
        <>
        <div className="container-box">
            <div className="Get-in-touch">
            <h1> Get in touch. </h1>
            </div>

            <div className="contactform">
                <div className="contactform-matter">
                    <h1> kusuma </h1>
                </div>
            <div className="Contact">
                <form onSubmit={handleSubmit}>
                <div className="client-name">
            <label htmlFor="client-name"> full name </label>
            <input type="text" name='client' value={client} placeholder='enter your name.' onChange={handleData}/>
                    </div>
                    <div className="mail">
            <label htmlFor="mail"> email address </label>
            <input type="text" name='mail' value={mail} placeholder='enter your email here.' onChange={handleData}/>
                    </div>
                    <div className="reason">
            <label htmlFor="reason"> Please Specify Your Purpose of Contact </label>
            <textarea type="text" name='reason' placeholder='....' value={reason} onChange={handleData}/>
                    </div>
            </form>

            <div className="submit-button">
                <Button handle = { handleSubmit} />
                </div>

            </div>
            </div>
        </div>
        </>
    );
}

 function Button( {handle}) {
    return (
    <button className='submit' onClick={handle}>
            Submit
    </button>
    );
 }

 export function SM() {
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

export default ContactMe;