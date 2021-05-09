import React from 'react';
import './AboutMe.css';
import combined from '../images/babyMeandOlderMe.jpg'

const AboutMe = () => {

    return (
        <div>
            <div className="ui segment primary">
                <div className="ui sizer vertical segment">
                    <div className="ui centered huge header">About Me</div>
                </div>

                <div className="customSpacing">
                    <div className="ui two column doubling stackable grid container">
                        <div className="column">
                            <img src={combined} alt="babyAndOlderMe" height="500" width="500" />
                        </div>
                        <div className="column">
                            <div className="ui compact text container segment">
                            <center><p><b>
                                    I come from a family of 6 in a small city in Texas called Alton.
                                    I attended High School at Mission High School and graduated in 2018.
                                    I graduated as a Mission Merit, and in the top 10% of my class. I am
                                    currently a junior attending the University of Texas Rio Grande Valley,
                                    pursuing a degree in Computer Engineering. When I am not studying I enjoy
                                    playing video games, watching sports and training Brazilian Jiu-Jitsu. Currently
                                    I am looking for a role where I can help contribute and make an impact, while at
                                    the same time grow my career skills and learn from other experienced team members.
                                    The job searching experience has been tough so far, but some of my greatest strengths
                                    include patience, commitment, hard work and dedication, which will help greatly in my
                                    job searching.
                            </b></p></center>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AboutMe;