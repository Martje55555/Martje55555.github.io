import React from 'react';
import my2ndPic from '../public/images/secondPic.png';
//import './Home.css';
import './AboutMe.css';
import '../site/globals/site.variables';
const Home = () => {
    const disable = document.querySelector('.disabled');

    return (
        <div>
            <div className="ui segment primary">
                <br />
                {/* <div className="ui sizer vertical segment">
                    <div className="ui centered huge header">My Portfolio</div>
                </div> */}
                <div className="ui centered card black">
                    <div className="medium image">
                        <img src={my2ndPic} alt="pictureofMe" />
                    </div>
                    <div className="content">
                        <a className="header"><center>Jesus Martinez</center></a>
                    </div>
                </div>
            </div>

            <div className="ui black raised very padded text container segment">
                <h1 className="ui centered header"><u><b>About Me</b></u></h1>

                <center><p><b>
                    I come from a family of 6 in a small city in Texas called Alton.
                    I attended High School at Mission High School and graduated in 2018.
                    I graduated as a Mission Merit, and in the top 10% of my class. I am
                    a recent grad at the University of Texas Rio Grande Valley, with a 
                    Bachelor's of Science in Computer Engineering. I am currently a Cloud Data Engineer 
                    at Procter & Gamble (P&G) and a Freelance Engineer/Technical Writer.
                </b></p></center>

            </div>

            <br />




        </div>
    )
}

export default Home;
