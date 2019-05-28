import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './EditProfilePage.scss';

class EditProfilePage extends Component {
  render() {
    return(
      <div className="container">
        <h3>Редагувати профіль</h3>
        <div className="inputs-container">
          <div className="photo">
            <img src="https://picsum.photos/250" alt="" />
          </div>
          <div className="inputs">
            <TextField
              label="Ім'я"
              defaultValue="Олескандр"
              margin="normal"
              variant="outlined"
              // disabled={true}
              className="input-field-part"
            />
            <TextField
              label="Фамілія"
              defaultValue="Громов"
              margin="normal"
              variant="outlined"
              // disabled={true}
              className="input-field-part"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default EditProfilePage;