import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Editor, EditorState } from 'draft-js';
import './EditProfilePage.scss';

class EditProfilePage extends Component {

  state = {
    editorState: EditorState.createEmpty()
  }

  styles = {
    editor: {
      border: '1px solid #c4c4c4',
      borderRadius: '4px',
      minHeight: '200px',
      padding: '15px 20px',
      cursor: 'text'
    }
  };

  languageOptions = [
    { value: 'Українська', label: 'Українська' },
    { value: 'Російська', label: 'Російська' },
    { value: 'Англійська', label: 'Англійська' },
    { value: 'Французька', label: 'Французька' },
    { value: 'Польська', label: 'Польська' },
    { value: 'Німецька', label: 'Німецька' }
  ];

  subjectOptions = [
    { value: 'Математика', label: 'Математика' },
    { value: 'Фізика', label: 'Фізика' },
    { value: 'Інформатика', label: 'Інформатика' },
    { value: 'Програмування', label: 'Програмування' },
    { value: 'Англійська мова', label: 'Англійська мова' },
    { value: 'Українська мова', label: 'Українська мова' },
    { value: 'Біологія', label: 'Біологія' },
    { value: 'Хімія', label: 'Хімія' },
    { value: 'Історія', label: 'Історія' }
  ];

  levelOptions = [
    { value: 'Дошкільна програма', label: 'Дошкільна програма' },
    { value: 'Початкова школа', label: 'Початкова школа' },
    { value: '5 клас', label: '5 клас' },
    { value: '6 клас', label: '6 клас' },
    { value: '7 клас', label: '7 клас' },
    { value: '8 клас', label: '8 клас' },
    { value: '9 клас', label: '9 клас' },
    { value: '10 клас', label: '10 клас' },
    { value: '11 клас', label: '11 клас' },
    { value: 'Програма університету', label: 'Програма університету' }
  ]

  priceOptions = [
    { value: 'За домовленістю', label: 'За домовленістю' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '150', label: '150' },
    { value: '200', label: '200' },
    { value: '250', label: '250' },
    { value: '300', label: '300' },
    { value: '350', label: '350' },
    { value: '400', label: '400' }
  ]

  animatedComponents = makeAnimated();

  onEditorChange = (editorState) => {
    this.setState({ editorState });
  }

  sendRequest = () => {
    console.log(this.state);
  }

  render() {

    const { userData: { firstName, lastName, languages, levels, photo, price, subjects, phone, description } } = this.props;

    // console.log(this.props.userData);

    return(
      <div className="container">
        <h3>Редагувати профіль</h3>
        <div className="inputs-container">
          <div className="photo-container">
            <div className="photo">
              <img src={photo} alt="" />
            </div>
            <Button className="btn" variant="contained" color="primary">
              Редагувати фото
            </Button>
          </div>
          <div className="inputs">
            <div className="halfs-container">
              <TextField
                label="Ім'я"
                defaultValue={firstName}
                margin="normal"
                variant="outlined"
                // disabled={true}
                className="input-field-half"
              />
              <TextField
                label="Фамілія"
                defaultValue={lastName}
                margin="normal"
                variant="outlined"
                // disabled={true}
                className="input-field-half"
              />
            </div>
            <div className="thirds-container">
              <TextField
                label="Телефон"
                defaultValue={phone}
                margin="normal"
                variant="outlined"
                // disabled={true}
                className="input-field-part"
              />
              <TextField
                label="Місто"
                defaultValue="Київ"
                margin="normal"
                variant="outlined"
                // disabled={true}
                className="input-field-part"
              />
              <TextField
                label="Ціна за 1 годину заняття (грн)"
                defaultValue={price}
                margin="normal"
                variant="outlined"
                // disabled={true}
                className="input-field-part"
              />
            </div>
            <div className="input-field-full">
              <label className="label">З якими класами займаюсь?</label>
              <Select
                closeMenuOnSelect={false}
                components={this.animatedComponents}
                isMulti
                options={this.levelOptions}
                defaultValue={levels.map(level => ({ value: level, label: level}) )}
              />
            </div>
            <div className="input-field-full">
              <label className="label">Які предмети викладаю</label>
              <Select
                closeMenuOnSelect={false}
                components={this.animatedComponents}
                isMulti
                options={this.subjectOptions}
                defaultValue={subjects.map(subject => ({ value: subject, label: subject}) )}
              />
            </div>
            <div className="input-field-full">
              <label className="label">Мова спілкування</label>
              <Select
                closeMenuOnSelect={false}
                components={this.animatedComponents}
                isMulti
                options={this.languageOptions}
                defaultValue={languages.map(language => ({ value: language, label: language}) )}
              />
            </div>
            <div className="input-field-full">
              <label className="label">Інформація про себе</label>
              <div style={this.styles.editor}>
                <Editor 
                  editorState={this.state.editorState} 
                  onChange={this.onEditorChange} 
                  handleKeyCommand={this.editorHandleKeyCommand}
                  placeholder="Здесь можно печатать..."
                />
              </div>
            </div>
            <Button onClick={this.sendRequest} className="edit-btn" variant="outlined" color="primary">
              Оновити данні
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
export default EditProfilePage;