import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';

import { BrowserRouter as Router, HashRouter, Route, Redirect } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <HashRouter>
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route path="/AboutMe" component={Home} />
                <Route path="/MyExperience" component={AboutMe} />
                <Route path="/Projects" component={Projects} />
                <Route path="/ContactMe" component={ContactMe} />
            </HashRouter>
        </div>

    )
}

export default App;
