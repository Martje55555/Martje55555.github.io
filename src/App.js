import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
//import { Route, Switch, Redirect } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/">
                        <Redirect to="/Home" />
                    </Route>
                    <Route exact path="/AboutMe" component={AboutMe} />
                    <Route exact path="/Projects" component={Projects} />
                    <Route exact path="/ContactMe" component={ContactMe} />
                </Switch>
            </Router>
        </div>

    )
}

export default App;