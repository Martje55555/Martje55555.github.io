import React from 'react';

import './Home.css';
import resumePDF from '../public/images/Jesus_Martinez_2022.pdf';

const AboutMe = () => {

    const handleClick = () => {
        window.open(resumePDF) ||
            window.location.replace(resumePDF)
    }

    return (
        <div>
            <br />

            <center><a onClick={() => handleClick()} download={resumePDF} title="My Resume">
                Download My Resume
            </a></center>

            <div className="ui black raised very padded text container segment">
                <h1 className="ui centered header"><u><b>My Experience</b></u></h1>

                <h3 className="ui centered header"><u>Work Experience</u></h3>

                <center><p><u>Cloud Data Engineer <a target='_blank' href={'https://www.pgcareers.com/'}>@ Procter & Gamble (P&G) </a>  01/2023 - current </u></p></center>
                <li>I am part of P&G's Cloud Team, more specifically in the FinOps space, helping drive cloud cost saving solutions to the company.</li>
                <li>Responsible for designing, building, and maintaining data systems in cloud environments.</li>
                <br/>

                <center><p><u>Freelance Technical Writer <a target='_blank' href={'https://hackr.io/'}>@ Hackr.io </a>  11/2022 - current </u></p></center>
                <li>Responsible for creating informative and engaging content about the latest technology trends and developments.</li>
                <li>Research and analyze the latest technology products, services, and systems to provide insightful and educational content to readers.</li>
                <br />

                <center><p><u>Data Science Intern <a target='_blank' href={'https://www.usda.gov/da/ohs'}>@ U.S. Department of Agriculture (USDA) </a>  06/2022 - 8/2022 </u></p></center>
                <li>Currently interning at USDA in the Emergency Management Branch, through the Hispanic Association of Colleges and Universities internship program (HACU) </li>
                <br />

                <center><p><u>Software Engineer Intern <a target='_blank' href={'https://www.lob.com/'}>@ Procter & Gamble (P&G) </a>  06/2022 - 8/2022 </u></p></center>
                <li>Developed an end-to-end automated Azure SQL Database & Virtual Machine optimization process using Machine Learning to determine rightsizing candidates and savings value generated. Estimated annual savings- $2.3 Million.</li>
                <li>Designed an automated solution to perform monthly allocation of Amazon Web Services (AWS) Backup Charges.</li>
                <li>Created a system to fairly split charges between the application teams that consumed backup charges.</li>
                <li>Discovered unused AWS DynamoDB resources and EC2 snapshots to then be decommissioned thus cutting costs. Estimated Savings ~ $40k</li>
                <li>Presented Project Results at both the midpoint and endpoint of the internship to ITS Leadership.</li>
                <br />

                <center><p><u>Undergraduate Research Assistant 01/2022 - 06/2022</u></p></center>
                <li>Undergraduate Research Assistant for CREST MECIS at <a target="_blank" href={"https://www.utrgv.edu/innovation/news/news-stories/crest/index.htm"}>UTRGV</a>, funded by the <a target="_blank" href={"https://www.nsf.gov/awardsearch/showAward?AWD_ID=2112650&HistoricalAwards=false"}>National Science Foundation</a></li>
                <li>Research consists in the area of artificial intelligence, but more specifically autonomous transportation.</li>
                <li>Current project consists of creating an autonomous vehicle simulator, where one can sit and experience autonomous
                    transportation with different scenarios.</li>
                <li>Lead programmer, tasked with creating different scenarios using the CARLA python API and training an agent using reinforcement learning.</li>

                <br />

                <center><p><u>Teaching Assistant 09/2021 - 12/2021</u></p></center>
                <li>Teaching Assistant for the CS Department at <a target="_blank" href={"https://www.utrgv.edu/csci/"}>UTRGV</a>, and the Data Structures and Algorithms course.</li>
                <li>Assist two classes combined for over 80 students with assignments/projects or any questions they may have.</li>
                <li>I also grade assignments and projects which are written in C++.</li>

                <br />

                <center><p><u>Software Engineer Intern <a target='_blank' href={'https://www.lob.com/'}>@Lob</a>  06/2021 - 09/2021</u></p></center>
                <li>Improved and maintained existing API offerings to provide the best possible service and experience for Lob customers.</li>
                <li>Created endpoints for employees to process requests to redact personal information from databases which reduced workload from engineers and possible user error.</li>
                <li>Created development environment using Docker for local development and testing for redactions project.</li>
                <li>Increased security and overall API performance by upgrading dependencies in a large codebase.</li>
                <li>Read about some of the work I did while interning at Lob and protecting privacy with data redaction - <a target="_blank" href={"https://www.lob.com/blog/protecting-privacy-with-data-redaction"}>Blog Post</a></li>

                <h3 className="ui centered header"><u>Other Experience</u></h3>

                <center> <p><u>UTRGV Frontera Devs Lead 01/2022 - (current)</u></p></center>
                <center><p>
                    Programs Lead driving the first inaugural Frontera Devs hackathon and leading a team to help us cross the finish line.
                </p> </center>

                <br />

                <center> <p><u>HackTX 2021</u></p></center>
                <center><p>
                    Coordinated with a team of three to develop a mobile application that shows the distance and time difference
                    between two celestian bodies (e.q., planet, star), as part of the HackTx 2021 competition. Designed user interface logic for multi-screen mobile application, functions to calculate desired
                    variables, and performed code reviews.
                    Developed using Flutter, Dart, and Auth0.
                </p> </center>

                <br />

                <center> <p><u>Code for Good 2021</u></p></center>
                <center><p>
                    Over the span of a weekend, I had the privilege to participate in the Code for Good Hackathon
                    hosted by JPMorgan Chase & Co. where we were given the opportunity to aid one of three nonprofit organization
                    through our development. My team and I worked with Femergy Ohio, an organization that focuses on the empowerment of
                    young girls and women, to find a solution to their difficulty in keeping young girls intrigued in a distance platform due to the
                    recent pandemic. My team and I developed a platform to serve as a safe space for the young girls to express themselves via journal entries
                    while also providing the mentors the resource to maintain updated with their mentees. Our project focuses on a personalized connection between the mentor
                    and the mentee to form an everlasting connection.
                </p> </center>

                <br />

                <center><p><u>Software Developer Mentee <a target='_blank' href={'https://www.codubee.com/'}>@Codubee</a>  6/2021 - 8/2021</u></p></center>
                <center><p>
                    Worked on a full-stack math tutorial web application on the backend team, where we got real world experience while being guided by a mentor.
                    Gained experience with Agile/Scrum, Jira, Postman and API development.

                    Link to web-app - <a target="_blank" href={"https://mathskillsmw3-4-front.herokuapp.com"}> MathSkills</a>
                </p> </center>

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
