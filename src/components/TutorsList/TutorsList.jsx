import React, { Component } from 'react';
import axios from 'axios';
import OneTutor from '../OneTutor/OneTutor';

class TutorList extends Component {

  state = {
    tutors: []
  }

  componentDidMount() {
    axios.get('http://localhost:4000/tutors').then((res) => {
      this.setState({tutors: res.data});
    });
  }

  // временынй функционал по добавлению нового репетитора
  addNewTutor = () => {
    axios.post('http://localhost:4000/newTutor', {
      mail: 'someelse@mail.com',
      password: '1qazxsw2',
      firstName: 'Степан', 
      lastName: 'Голінько',
      photo: 'https://picsum.photos/250',
      subjects: ["Фізика", "Програмування"],
      levels: ["6 клас", "7 клас", "8 клас", "9 клас", "10 клас", "11 клас"],
      languages: ["Українська", "Російська"],
      price: 200,
      places: [
        {lat: 1.2231234, lon: 30.1239121},
        {lat: 3.2831234, lon: 34.1239721},
        {lat: 11.2231231, lon: 31.1246121}
      ],
      score: 5
    }).then((res) => console.log(res.data));
  }

  render() {
    const { tutors } = this.state;
    return(
      <div>
        {
          tutors.map((tutor) => <OneTutor key={tutor._id} {...tutor} />)
        }
        <button onClick={this.addNewTutor}>Create new tutor</button>
      </div>
    )
  }
}
export default TutorList;