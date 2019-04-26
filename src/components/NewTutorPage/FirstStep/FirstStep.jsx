import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withFormik } from 'formik';
import './FirstStep.scss';

const FirstStep = (props) => {

  const { values, handleChange, handleSubmit } = props;

  return(
    <form className="form-container" onSubmit={handleSubmit}>
      <TextField
        label="Ім'я"
        type="text"
        name="firstName"
        autoComplete="firstName"
        margin="normal"
        variant="outlined"
        value={values.firstName}
        onChange={handleChange}
      />
      <TextField
        label="Фамілія"
        type="text"
        name="lastName"
        autoComplete="lastName"
        margin="normal"
        variant="outlined"
        value={values.lastName}
        onChange={handleChange}
      />
      <TextField
        error
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        value={values.email}
        onChange={handleChange}
      />
      <button type="submit">12312312</button>
    </form>
  )
}
export default withFormik({
  mapPropsToValues() {
    return {
      firstName: '',
      lastName: '',
      email: ''
    }
  },
  handleSubmit(formValues) {
    console.log(formValues);
  }
})(FirstStep);