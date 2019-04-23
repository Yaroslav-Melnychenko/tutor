import React from 'react';
import ReactStars from 'react-stars';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './OneTutor.scss';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const OneTutor = (props) => {

  const { classes, firstName, lastName, photo, subjects, levels, languages, price, score } = props;

  return(
    <div className='tutorContainer'>
      <div className='main-info'>
        <a href="#link" className="tutors-pic">
          <img src={photo} alt="" />
        </a>
        <div className='tutor-first-row'>
          <h3 className="tutor-name">
            <a href="#link">{firstName} {lastName}</a>
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
          <p className="tutors-teacher__more">
            Магістр освіти, переможець математичних олімпіад та конкурсів. Досвід роботи у інтернаціональній школі SABIS ®. Компетенція у підготовці учнів до вступу у 
          </p>
          <a href="#link" className="view-more">Переглянути детальныше</a>
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
          <Button variant="contained" color="primary" className={classes.button}>Записатись</Button>
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(OneTutor);