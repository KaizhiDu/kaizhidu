import SideBar from './SideBar';
import MainPage from './MainPage';
import MyTimeline from './MyTimeline';
import Profile from './Profile';
import Game from './Game';
import Projects from './Projects';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <SideBar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/timeline" component={MyTimeline} />
          <Route path="/profile" component={Profile} />
          <Route path="/game" component={Game} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    );
  }
}

export default App;
