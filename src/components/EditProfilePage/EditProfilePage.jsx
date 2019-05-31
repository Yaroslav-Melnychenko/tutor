import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './EditProfilePage.scss';

class EditProfilePage extends Component {

  state = { ...this.props.userData };

  // constructor(props) {
  //   super(props);
  //   const { userData: { firstName, lastName, languages, levels, photo, price, subjects, phone, description, place } } = props;
  //   this.state = { firstName, lastName, phone, place, price, levels, subjects, languages, description, photo };
  //   // console.log(this.props);
  // }

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

  onInputChange = (e) => {
    this.setState({ 
      [e.target.name] : e.target.value 
     })
  }

  onSelectChange = (options, optionName) => {
    this.setState({ 
      [optionName]: options ? options.map(option => option.value) : null 
    });
  }

  sendRequest = () => {
    const { userData: { _id }, updateUserStore } = this.props;
    updateUserStore(this.state, _id);
  }

  render() {

    const { firstName, lastName, languages, levels, photo, price, subjects, phone } = this.state;

    // console.log(this.props);

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
                name="firstName"
                className="input-field-half"
                onChange={this.onInputChange}
              />
              <TextField
                label="Фамілія"
                defaultValue={lastName}
                margin="normal"
                variant="outlined"
                name="lastName"
                className="input-field-half"
                onChange={this.onInputChange}
              />
            </div>
            <div className="thirds-container">
              <TextField
                label="Телефон"
                defaultValue={phone}
                margin="normal"
                variant="outlined"
                name="phone"
                className="input-field-part"
                onChange={this.onInputChange}
              />
              <TextField
                label="Місто"
                defaultValue="Київ"
                margin="normal"
                variant="outlined"
                name="place"
                className="input-field-part"
                onChange={this.onInputChange}
              />
              <TextField
                label="Ціна за 1 годину заняття (грн)"
                defaultValue={price}
                margin="normal"
                variant="outlined"
                name="price"
                className="input-field-part"
                onChange={this.onInputChange}
              />
            </div>
            <div className="input-field-full">
              <label className="label">З якими класами займаюсь?</label>
              <Select
                closeMenuOnSelect={false}
                components={this.animatedComponents}
                isMulti
                options={this.levelOptions}
                defaultValue={ levels ? levels.map(level => ({ value: level, label: level}) ) : null }
                name="levels"
                onChange={(options) => this.onSelectChange(options, 'levels')}
              />
            </div>
            <div className="input-field-full">
              <label className="label">Які предмети викладаю</label>
              <Select
                closeMenuOnSelect={false}
                components={this.animatedComponents}
                isMulti
                options={this.subjectOptions}
                defaultValue={ subjects ? subjects.map(subject => ({ value: subject, label: subject}) ) : null }
                name="subjects"
                onChange={(options) => this.onSelectChange(options, 'subjects')}
              />
            </div>
            <div className="input-field-full">
              <label className="label">Мова спілкування</label>
              <Select
                closeMenuOnSelect={false}
                components={this.animatedComponents}
                isMulti
                options={this.languageOptions}
                defaultValue={ languages ? languages.map(language => ({ value: language, label: language}) ) : null }
                name="languages"
                onChange={(options) => this.onSelectChange(options, 'languages')}
              />
            </div>
            <div className="input-field-full">
              <label className="label">Інформація про себе</label>
              <TextField
                placeholder="Коротко охарактирезуйте себе, свої здібності..."
                variant="outlined"
                multiline={true}
                rows={8}
                className="textarea"
                name="description"
              />
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