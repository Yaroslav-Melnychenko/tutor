import React, { Component } from 'react';
import OneTutor from '../OneTutor/OneTutor';

class TutorList extends Component {

  state = {
    tutors: [
      {
        "_id": "5a68fdc3615eda645bc6bdec",
        "firstName": "Микола",
        "lastName": "Гавриленко",
        "photo": "https://picsum.photos/200",
        "subjects": ["Математика", "Фізика", "Програмування"],
        "levels": ["7 клас", "8 клас", "10 клас", "11 клас"],
        "languages": ["Українська", "Російська", "Англійська"],
        "price": 150,
        "places": [
          {"lat": 1.2231234, "lon": 30.1239121},
          {"lat": 3.2831234, "lon": 34.1239721},
          {"lat": 11.2231231, "lon": 31.1246121},
        ],
        "score": 4.7,
      },
      {
        "_id": "5a68fdc3615eda645bc3bdec",
        "firstName": "Микола",
        "lastName": "Гавриленко",
        "photo": "https://picsum.photos/300",
        "subjects": ["Математика", "Фізика", "Програмування"],
        "levels": ["7 клас", "8 клас", "10 клас", "11 клас"],
        "languages": ["Українська", "Російська", "Англійська"],
        "price": 150,
        "places": [
          {"lat": 1.2231234, "lon": 30.1239121},
          {"lat": 3.2831234, "lon": 34.1239721},
          {"lat": 11.2231231, "lon": 31.1246121},
        ],
        "score": 4.7,
      }
    ]
  }

  render() {
    const { tutors } = this.state;
    return(
      <div>
        {
          tutors.map((tutor) => <OneTutor key={tutor._id} {...tutor} />)
        }
      </div>
    )
  }
}
export default TutorList;