import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { validateInput } from '../../assets/validators';
import './LoginPage.scss';

class NewTutorPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
      loginError: {
        mail: null,
        password: null,
        message: null
      },
      isLoading: false
    }
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    if(!isValid) {
      this.setState({ loginError: errors });
    }
    return isValid;
  }

  submitForm = (e) => {
    if(this.isValid()) {
      this.setState({ 
        loginError: {
          mail: null,
          password: null,
          message: null
        },
        isLoading: true
      })
      e.preventDefault();
      this.props.logIn(this.state).then(
        () => { 
          this.setState({ 
            loginError: this.props.loginError,
            isLoading: false
          });
          this.props.history.push('/');
        }
      );
    }
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    });
  }

  render() {

    const { mail, password, loginError } = this.state;

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
              error={loginError.mail || loginError.message ? true : false}
              name="mail"
              className="input-field"
              label="Email"
              type="text"
              margin="normal"
              variant="outlined"
              value={mail}
              onChange={this.handleChangeInput}
            />
            { loginError.mail ? <p className="erroe-message">{ loginError.mail }</p> : null }
            <TextField
              error={loginError.password || loginError.message ? true : false}
              name="password"
              className='input-field'
              label="Пароль"
              type="password"
              margin="normal"
              variant="outlined"
              value={password}
              onChange={this.handleChangeInput}
            />
            { loginError.password ? <p className="erroe-message">{ loginError.password }</p> : null }
            { loginError.message ? <p className="erroe-message">{ loginError.message }</p> : null }
            <div className="button-container">
              <Button onClick={this.submitForm} disabled={this.state.isLoading} variant="outlined" color="primary">Вхід</Button>
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