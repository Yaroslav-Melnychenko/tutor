import React from 'react';
import ReactStars from 'react-stars';
import { Link } from "react-router-dom";
import './OneTutor.scss';

const OneTutor = (props) => {

  const { _id, firstName, lastName, photo, subjects, levels, languages, price, score, description } = props;

  return(
    <div className='tutorContainer'>
      <div className='main-info'>
        <Link to={'/tutor/' + _id} className="tutors-pic">
          <img src={photo} alt="" />
        </Link>
        <div className='tutor-first-row'>
          <h3 className="tutor-name">
            <Link to={'/tutor/' + _id}>{firstName} {lastName}</Link>
          </h3>
          <div className="tutors-teacher__info">
            <span className="subject-name">Предмет:</span> <span className="info-list">{subjects.join(', ')}</span>
          </div>
          <div className="tutors-teacher__info">
            <span className="subject-name">Класи:</span> <span className="info-list">{levels.join(', ')}</span>
          </div>
          <div className="tutors-teacher__info">
            <span className="subject-name">Мова викладання:</span> <span className="info-list">{languages.join(', ')}</span>
          </div>
        </div>
        <div className="tutor-second-row">
          <div className="about-title">Про себе</div>
          <p className="tutors-teacher__more">{description[0]}</p>
          <Link to={'/tutor/' + _id} className="view-more">Переглянути детальныше</Link>
        </div>
      </div>
      <div className='add-info'>
        <div className="raiting-stars">
          <ReactStars
            count={5}
            value={score}
            edit={false}
            size={22}
            color2={'#ffd700'}
            className='reactstars'
          />
          <a className="review-link" href="#link">2 відгуки</a>
        </div>
        <div className="payment">{price} <span className="currency">грн/год</span></div>
        <div className="subscribe">
          <Link to={'/tutor/' + _id} className="btn">Записатись</Link>
        </div>
      </div>
    </div>
  );
}
export default OneTutor;