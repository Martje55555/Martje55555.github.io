import React from 'react';
import { Home } from './Home';
import { About } from './AboutMe';
import { Projects } from './Projects';
import {ContactMe } from './ContactMe';
import { NavBar } from './NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/AboutMe" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exzct path="/ContactMe" component={ContactMe} />
      </Switch>
    </div>
  );
};