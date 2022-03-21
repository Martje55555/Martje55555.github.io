import React from 'react';
import myPic from '../public/images/picture.jpg';
import combined from '../public/images/babyMeandOlderMe.jpg';
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
                    currently a Senior attending the University of Texas Rio Grande Valley,
                    pursuing a degree in Computer Engineering. When I am not studying I enjoy
                    playing video games, watching sports and training Brazilian Jiu-Jitsu. I previously worked
                    as a Software Engineer Intern at <a href="https://www.lob.com/" target="_blank">Lob </a>
                    where we build APIs to Increase Connectivity Between the Offline and Online Worlds.
                    I currently work as an Undergraduate Research Assistant in the area of artificical intelligence,
                    but more specifically in autonomous transportation, a project funded by the NSF and as a member of the 
                    <a target={"_blank"} href={"https://fatemehnazari.weebly.com/"}> H-SMART Lab</a>.
                </b></p></center>

            </div>

            <br />




        </div>
    )
}

export default Home;
