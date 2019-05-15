import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './EditProfilePage.scss';

class EditProfilePage extends Component {
  render() {
    return(
      <div className="container">
        <h3>Редагувати профіль</h3>
        <div className="inputs-container">
        <TextField
          label="Ваше ім'я"
          defaultValue="Олескандр"
          margin="normal"
          variant="outlined"
          disabled={true}
        />
        </div>
      </div>
    )
  }
}
export default EditProfilePage;