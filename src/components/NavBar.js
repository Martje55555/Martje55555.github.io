import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    const history = useHistory();
    const [homeActive, setHomeActive] = useState(false);
    const [aboutMeActive, setAboutHomeActive] = useState(false);
    const [projectsActive, setProjectsActive] = useState(false);
    const [contactMeActive, setContactMeActive] = useState(false);

    const home = () => {
        history.push('/AboutMe');
        setHomeActive(!homeActive);
        setAboutHomeActive(false);
        setProjectsActive(false);
        setContactMeActive(false);

    }
    const aboutMe = () => {
        history.push('/MyExperience');
        setHomeActive(false);
        setAboutHomeActive(!aboutMeActive);
        setProjectsActive(false);
        setContactMeActive(false);
    }
    const projects = () => {
        history.push('/Projects');
        setHomeActive(false);
        setAboutHomeActive(false);
        setProjectsActive(!projectsActive);
        setContactMeActive(false);
    }
    const contactMe = () => {
        history.push('/ContactMe');
        setHomeActive(false);
        setAboutHomeActive(false);
        setProjectsActive(false);
        setContactMeActive(!contactMeActive);
    }


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
    )
}

export default NavBar;