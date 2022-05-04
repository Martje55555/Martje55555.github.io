import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';

import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/AboutMe" element={<Home />} />
                    <Route path="/MyExperience" element={<AboutMe />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/ContactMe" element={<ContactMe />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
