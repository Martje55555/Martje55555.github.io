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
                    but more specifically in autonomous transportation, a project funded by the NSF.
                </b></p></center>

            </div>

            <br />




        </div>
    )
}

export default Home;

{/* <h3 className="ui centered header"><u>Work Experience</u></h3>

<center><p><u>Teaching Assistant 9/2021 - 12/2021</u></p></center>

<center><p><u>Software Engineer Intern <a target='_blank' href={'https://www.lob.com/'}>@Lob</a>  6/2021 - 8/2021</u></p></center> */}

{/* <center><p>
Improved and maintained existing API offerings to provide the best possible service and experience for Lob customers.
Most recent assignment I worked on was creating endpoints for customers to redact personal information from our DBs (to comply with the GDPR) and integrating said endpoints
to our API. Previously the way user data was being handled was to manually go into the production database and redact it. Which in practice is
a big no no. Now with the new endpoints, all that needs to be done is hit it with the correct auth and payload to complete the redaction.
</p></center> */}

{/* <center><p>Worked on a project with a team which won 2nd place, where we
    created a solution to support low income or displaced families on
    finding and securing housing or other vital resources. Created an
    app using flutter/dart and the google map api that gathers nearby
    resources based on user’s location and preference.The hackathon was a
    lot of fun as I attended with two of my friends that I work well with,
    which made things easier and smoother. The hackathon ran for over 36 hours,
    and I did not sleep during the whole duration. The sleepless nights were worth
    it as we ended up taking 2nd place in the HackTx Wayfair: Hack for Housing Inequality
    challenge!
</p> </center> */}


{/* <center><p><u>Student Work Study 8/2018 - 6/2020</u></p></center>
<center><p>I was in charge of monitoring a building that contained practice
    rooms and a computer lab for music majors to use. I made
    sure everyone complied with the building and computer lab rules.
    I also worked in an office setting answering phone calls, delivering mail
    and working with excel.
</p></center> */}

// <h3 className="ui centered header"><u>Extra</u></h3>

// <center> <p><u>HackTX 2020</u></p></center>
