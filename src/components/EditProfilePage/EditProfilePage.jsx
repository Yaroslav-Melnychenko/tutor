import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './EditProfilePage.scss';

class EditProfilePage extends Component {

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

  animatedComponents = makeAnimated();

  render() {
    return(
      <div className="container">
        <h3>Редагувати профіль</h3>
        <div className="inputs-container">
          <div className="photo-container">
            <div className="photo">
              <img src="https://picsum.photos/250" alt="" />
            </div>
            <Button className="btn" variant="contained" color="primary">
              Редагувати фото
            </Button>
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
            <TextField
              label="Телефон"
              defaultValue="+38 096 765 43 21"
              margin="normal"
              variant="outlined"
              // disabled={true}
              className="input-field-part"
            />
            <div className="input-field-full">
              <label className="label">З якими класами займаюсь?</label>
              <Select
                closeMenuOnSelect={false}
                components={this.animatedComponents}
                isMulti
                options={this.levelOptions}
              />
            </div>
            <div className="input-field-full">
              <label className="label">Які предмети викладаю</label>
              <Select
                closeMenuOnSelect={false}
                components={this.animatedComponents}
                isMulti
                options={this.subjectOptions}
              />
            </div>
            <div className="input-field-full">
              <label className="label">Мова спілкування</label>
              <Select
                closeMenuOnSelect={false}
                components={this.animatedComponents}
                isMulti
                options={this.languageOptions}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default EditProfilePage;