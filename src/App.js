import React, { Component } from 'react';
import AppContainer from './components/AppContainer/AppContainer';
import TutorPage from './components/TutorPage/TutorPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import './App.scss';

require('dotenv').config();

class App extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <Router>
        <Header />
        <Route exact path="/" component={AppContainer} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/tutor/:id" component={TutorPage} />
      </Router>
    );
  }
}

export default App;
