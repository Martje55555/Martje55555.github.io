import React from 'react';
import './AboutMe.css';
import babyMe from '../images/babyMe.jpg';
import gradPic from '../images/grad.jpg';

const AboutMe = () => {

    return (
        <div>
            <div className="ui segment">
                <div className="ui sizer vertical segment">
                    <div className="ui centered huge header">About Me</div>
                </div>
            </div>

            <div className="imageContainer">
                <img className="ui small centered image images" src={babyMe} />
                <img className="ui small centered image images" src={gradPic} />
            </div>

        </div>
    )
}

export default AboutMe;