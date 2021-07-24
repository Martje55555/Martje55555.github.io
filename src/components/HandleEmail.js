import React from 'react';
import utrgv from '../public/images/UTRGV.jpg';
const HandleEmail = ({image, email, emailType}) => {

    const handleEmail = (email) => {
        window.open(`mailto:${email}`)
    }

    return (

        <div className="ui link cards centered">
            <div className="card">
                <div className="image">
                    <img src={image} />
                </div>
                <div className="content">
                    <div className="header"><center>{emailType}</center></div>
                    
                    <div className="description">
                        <center><h1><a onClick={() => handleEmail({email})}>{email}</a></h1></center>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="image">
                    <img style={{width: '500px', height:'250px'}}src={utrgv} />
                </div>
                <div className="content">
                    <div className="header"><center>School Email</center></div>
                    
                    <div className="description">
                        <center><h1><a onClick={() => handleEmail('jesus.martinez31@utrgv.edu')}>jesus.martinez31@utrgv.edu</a></h1></center>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default HandleEmail;