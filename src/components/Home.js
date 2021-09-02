import React from 'react';
import myPic from '../public/images/picture.jpg';
import my2ndPic from '../public/images/secondPic.png';
import './Home.css';
import '../site/globals/site.variables';
const Home = () => {
    return (
        <div>
            <div className="ui segment primary">
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
                <h1 className="ui centered header"><u><b>My Experience</b></u></h1>
                <h3 className="ui centered header"><u>Work Experience</u></h3>

                <center><p><u>Data Structures & Algorithms Teacher Assistant 9/2021 - 12/2021</u></p></center>
                <center><p> 
                TA for the Computer Science department at UTRGV for the Data Structures & Algorithms course. 
                </p></center>

                <center><p><u>Software Engineer Intern <a target='_blank' href={'https://www.lob.com/'}>@Lob</a>  6/2021 - 8/2021</u></p></center>
                <center><p>Improved and maintained existing API offerings to provide the best possible service and experience for Lob customers.
Most recent assignment I worked on was creating endpoints for customers to redact personal information from our DBs (to comply with the GDPR) and integrating said endpoints
to our API. Previously the way user data was being handled was to manually go into the production database and redact it. Which in practice is
 a big no no. Now with the new endpoints, all that needs to be done is hit it with the correct auth and payload to complete the redaction.

                </p></center>

                <center><p><u>Student Work Study 8/2018 - 6/2020</u></p></center>
                <center><p>I was in charge of monitoring a building that contained practice
                rooms and a computer lab for music majors to use. I made
                sure everyone complied with the building and computer lab rules.
                I also worked in an office setting answering phone calls, delivering mail
                and working with excel.
                </p></center>

                <h3 className="ui centered header"><u>HACKATHONS</u></h3>
                <center><p><u>Google KickStart Round F 2020</u></p></center>
                <center><p>Participated in a global online coding competition, consisting
                of three-hour rounds of a variety of algorithmic challenges designed by
                google engineers. It was a fun experience, I wasn't very successful in the 
                competition, but the important thing was that I had fun with the challenge 
                and learned from the experience.
                    </p> </center>

                <center> <p><u>HackTX 2020</u></p></center>
                <center><p>Worked on a project with a team which won 2nd place, where we
                created a solution to support low income or displaced families on
                finding and securing housing or other vital resources. Created an
                app using flutter/dart and the google map api that gathers nearby
                resources based on user’s location and preference.The hackathon was a
                lot of fun as I attended with two of my friends that I work well with,
                which made things easier and smoother. The hackathon ran for over 36 hours,
                and I did not sleep during the whole duration. The sleepless nights were worth
                it as we ended up taking 2nd place in the HackTx Wayfair: Hack for Housing Inequality
                challenge!
                    </p> </center>
            </div>
            <div>
                <br />
            </div>
        </div>
    )
}

export default Home;