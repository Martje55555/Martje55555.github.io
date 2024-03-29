import React from 'react';
import gImage from '../public/images/newgmaillogo.jpg';
import linkedIn from '../public/images/linkedin.png';
import HandleEmail from './HandleEmail.js';

const ContactMe = () => {

    const handleClick = () => {
        window.open("https://www.linkedin.com/in/jesus-e-martinez") ||
            window.location.replace("https://www.linkedin.com/in/jesus-e-martinez")
    }

    return (

        <div style={{marginTop:'3%'}}>
            <HandleEmail image={gImage} email='Martje0629@gmail.com' emailType='Personal Email' />

            <div className="ui link cards centered">
                <div className="card">
                    <div className="image">
                        <img src={linkedIn} />
                    </div>
                    <div className="content">
                        <div className="header"><center>Connect With Me!</center></div>

                        <div className="description">
                            <center>
                                <button className="ui linkedin button" onClick={() => handleClick()}>
                                    <i className="linkedin icon"></i>
                                    LinkedIn
                                </button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactMe;