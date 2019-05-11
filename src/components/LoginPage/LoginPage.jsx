import React, { Component } from 'react';
// import { withFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginPage.scss';

class NewTutorPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: props.userData.email,
      password: props.userData.password,
    }
  }

  submitForm = () => {
    // axios.post('http://localhost:4000/login', {
    //   mail: this.state.email,
    //   password: this.state.password,
    // }).then((user) => {
    //   this.props.logInSuccess(user.data);
    // });
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    });
  }

  render() {

    const { email, password } = this.state;

    return(
      <div className="login-container">
        <div className="login-page">
          <h3>Вхід до аккаунту</h3>
          <div className="social-login-container">
            <a href="#facebook" className="auth-link facebook"><FaFacebookF /> Facebook</a>
            <a href="#google" className="auth-link gmail"><FaGoogle /> Gmail</a>
          </div>
          <form className="form">
            <TextField
              name="email"
              className={`input-field ${ this.state.emailError ? 'input-error' : '' }`}
              label="Email"
              type="text"
              margin="normal"
              variant="outlined"
              value={email}
              onChange={this.handleChangeInput}
            />
            <TextField
              name="password"
              className="input-field"
              label="Пароль"
              type="password"
              margin="normal"
              variant="outlined"
              value={password}
              onChange={this.handleChangeInput}
            />
            <div className="button-container">
              <Button onClick={this.submitForm} variant="outlined" color="primary">Вхід</Button>
            </div>
          </form>
          <p>
            Забули пароль? <Link to="/restore">Відновити</Link> мій пароль
          </p>
        </div>
      </div>
    )
  }
}
export default NewTutorPage;