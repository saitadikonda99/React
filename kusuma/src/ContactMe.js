import React, { useState } from 'react';
import './ContactMe.css';

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
                    <h1> Appreciate your kind interest </h1>
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


export default ContactMe;