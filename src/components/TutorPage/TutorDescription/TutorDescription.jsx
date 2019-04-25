import React from 'react';
import './TutorDescription.scss';

const TutorDescription = (props) => {

  const { description } = props;

  return(
    <>
      <h3>Про себе</h3>
      <div className="description">
        {
          description.map((item, i) => <p key={i}>{item}</p>)
        }
      </div>
    </>
  )
}
export default TutorDescription;