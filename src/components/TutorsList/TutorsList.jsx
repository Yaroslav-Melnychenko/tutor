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
      mail: 'else@mail.com',
      password: 'sfg3fsdf2',
      firstName: 'Микита', 
      lastName: 'Гончарук',
      photo: 'https://picsum.photos/250',
      subjects: ["Математика", "Фізика", "Програмування"],
      levels: ["5 клас", "6 клас", "7 клас", "8 клас", "9 клас", "10 клас", "11 клас"],
      languages: ["Українська", "Російська"],
      price: 300,
      description: [
        "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона.",
        "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь."
      ],
      place: {lat: 50.431782, lng: 30.516382},
      score: 4.3
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