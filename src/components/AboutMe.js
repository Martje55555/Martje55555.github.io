import React from 'react';
import './AboutMe.css';
import combined from '../public/images/babyMeandOlderMe.jpg';
import lobSign from '../public/images/lobSign.jpg';

const AboutMe = () => {

    return (
        <div>
            <br />
            <div className="ui black raised very padded text container segment">
                <h1 className="ui centered header"><u><b>My Experience</b></u></h1>

                <h3 className="ui centered header"><u>Work Experience</u></h3>

                <center><p><u>Teaching Assistant 9/2021 - 12/2021</u></p></center>
                <li>Teaching Assistant for the CS Department at <a target="_blank" href={"https://www.utrgv.edu/csci/"}>UTRGV</a>, and the Data Structures and Algorithms course.</li>
                <li>Assist two classes combined for over 80 students with assignments/projects or any questions they may have.</li>
                <li>I also grade assignments and projects which are written in C++.</li>

                <br />

                <center><p><u>Software Engineer Intern <a target='_blank' href={'https://www.lob.com/'}>@Lob</a>  6/2021 - 9/2021</u></p></center>
                <li>Improved and maintained existing API offerings to provide the best possible service and experience for Lob customers.</li>
                <li>Created endpoints for employees to process requests to redact personal information from databases which reduced workload from engineers and possible user error.</li>
                <li>Created development environment using Docker for local development and testing for redactions project.</li>
                <li>Increased security and overall API performance by upgrading dependencies in a large codebase.</li>
                <li>Read about some of the work I did while interning at Lob and protecting privacy with data redaction - <a target="_blank" href={"https://www.lob.com/blog/protecting-privacy-with-data-redaction"}>Blog Post</a></li>

                <h3 className="ui centered header"><u>Other Experience</u></h3>

                <center><p><u>Software Developer Mentee <a target='_blank' href={'https://www.codubee.com/'}>@Codubee</a>  6/2021 - 8/2021</u></p></center>
                <li>Worked on a full-stack math tutorial web application on the backend team, where we got real world experience while being guided by a mentor.</li>
                <li>Gained experience with Agile/Scrum, Jira, Postman and API development.</li>

                <br />

                <center> <p><u>HackTX 2020</u></p></center>
                <center><p>
                    Worked on a project with a team which won 2nd place, where we
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
        </div>
    )
}

export default AboutMe;
