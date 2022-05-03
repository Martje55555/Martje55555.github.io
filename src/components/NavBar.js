import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    const Navigate = useNavigate();
    const [homeActive, setHomeActive] = useState(false);
    const [aboutMeActive, setAboutHomeActive] = useState(false);
    const [projectsActive, setProjectsActive] = useState(false);
    const [contactMeActive, setContactMeActive] = useState(false);

    const home = () => {
        Navigate('AboutMe', { replace: true });
        setHomeActive(!homeActive);
        setAboutHomeActive(false);
        setProjectsActive(false);
        setContactMeActive(false);

    };

    const aboutMe = () => {
        Navigate('/AboutMe', { replace: true });
        setHomeActive(false);
        setAboutHomeActive(!aboutMeActive);
        setProjectsActive(false);
        setContactMeActive(false);
    };

    const projects = () => {
        Navigate('/Projects', { replace: true });
        setHomeActive(false);
        setAboutHomeActive(false);
        setProjectsActive(!projectsActive);
        setContactMeActive(false);
    };

    const contactMe = () => {
        Navigate('/ContactMe', { replace: true });
        setHomeActive(false);
        setAboutHomeActive(false);
        setProjectsActive(false);
        setContactMeActive(!contactMeActive);
    };

    return (
        <div className="ui fluid four item menu ar">
            <a onClick={() => home()}
                className={homeActive ? "item active" : "item"}>
                About Me
            </a>

            <a onClick={() => aboutMe()}
                className={aboutMeActive ? "item active" : "item"}>
                My Experience
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
    );
};

export default NavBar;