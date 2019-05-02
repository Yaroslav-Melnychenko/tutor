import React from 'react';
import { withFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import './LoginPage.scss';

const NewTutorPage = () => {
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
            className="input-field"
            label="Email"
            type="text"
            // autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            className="input-field"
            label="Пароль"
            type="password"
            // autoComplete="password"
            margin="normal"
            variant="outlined"
          />
          <div className="button-container">
            <Button variant="outlined" color="primary">Вхід</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default withFormik({})(NewTutorPage);