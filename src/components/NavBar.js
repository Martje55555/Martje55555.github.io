import React, { useState } from 'react';

const NavBar = () => {

    const [homeActive, setHomeActive] = useState(false);
    const [aboutMeActive, setAboutHomeActive] = useState(false);
    const [projectsActive, setProjectsActive] = useState(false);
    const [contactMeActive, setContactMeActive] = useState(false);
    
    const home = () => {
        setHomeActive(!homeActive);
        setAboutHomeActive(false);
        setProjectsActive(false);
        setContactMeActive(false);
    }
    const aboutMe = () => {
        setHomeActive(false);
        setAboutHomeActive(!aboutMeActive);
        setProjectsActive(false);
        setContactMeActive(false);
    }
    const projects = () => {
        setHomeActive(false);
        setAboutHomeActive(false);
        setProjectsActive(!projectsActive);
        setContactMeActive(false);
    }
    const contactMe = () => {
        setHomeActive(false);
        setAboutHomeActive(false);
        setProjectsActive(false);
        setContactMeActive(!contactMeActive);
    }


    return (
        <div className="ui fluid four item menu">
            <a onClick={() => home()}
                className={homeActive ? "item active" : "item"}>
                Home
                </a>
            <a onClick={() => aboutMe()}
                className={aboutMeActive ? "item active" : "item"}>
                About Me
                </a>
            <a onClick={() => projects()}
                className={projectsActive ? "item active" : "item"}>
                Projects
                </a>
            <a onClick={() => contactMe()}
                className={contactMeActive ? "item active" : "item"}>
                Contact Me
                </a>
        </div>
    )
}

export default NavBar;