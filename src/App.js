import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
//import { Route, Switch, Redirect } from 'react-router-dom';

import { BrowserRouter as Router, HashRouter, Route, Redirect } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <HashRouter>
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route path="/Home" component={Home} />
                <Route path="/AboutMe" component={AboutMe} />
                <Route path="/Projects" component={Projects} />
                <Route path="/ContactMe" component={ContactMe} />
            </HashRouter>

        </div>

    )
}

export default App;

// <Router>
//                 <NavBar />
//                 <HashRouter>
//                     <Route exact path="/Home" component={Home} />
//                     <Route exact path="/">
//                         <Redirect to="/Home" />
//                     </Route>
//                     <Route exact path="/AboutMe" component={AboutMe} />
//                     <Route exact path="/Projects" component={Projects} />
//                     <Route exact path="/ContactMe" component={ContactMe} />
//                 </HashRouter>
//             </Router>
//         </div>