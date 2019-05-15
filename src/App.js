import React, { Component } from 'react';
import AppContainer from './components/AppContainer/AppContainer';
import TutorPage from './components/TutorPage/TutorPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import RestorePage from './components/RestorePage';
import RegistrationPage from './components/RegistrationPage';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './store/login/actions';
import './App.scss';

require('dotenv').config();

if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)._doc));
}

class App extends Component {

  render() {

    return (
      <Router>
        <Provider store={store}>
          <Header />
          <Route exact path="/" component={AppContainer} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/tutor/:id" component={TutorPage} />
          <Route path="/restore" component={RestorePage} />
          <Route path="/registration" component={RegistrationPage} />
        </Provider>
      </Router>
    );
  }
}

export default App;
