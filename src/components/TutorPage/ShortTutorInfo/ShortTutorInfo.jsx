import React, { Component } from 'react';
import './ShortTutorInfo.scss';

class ShortTutorInfo extends Component {
  render() {
    return(
      <>
        <div className='main-info border-none'>
          <div className="tutors-pic">
            <img src={this.props.photo} alt="" />
          </div>
          <div className='tutor-first-row'>
            <h3 className="tutor-name">{this.props.firstName} {this.props.lastName}</h3>
            <div className="tutors-teacher__info">
              <span className="subject-name">Предмет:</span> <span className="info-list">{this.props.subjects.join(', ')}</span>
            </div>
            <div className="tutors-teacher__info">
              <span className="subject-name">Класи:</span> <span className="info-list">{this.props.levels.join(', ')}</span>
            </div>
            <div className="tutors-teacher__info">
              <span className="subject-name">Мова викладання:</span> <span className="info-list">{this.props.languages.join(', ')}</span>
            </div>
          </div>
        </div>
        
      </>
    )
  }
}
export default ShortTutorInfo;