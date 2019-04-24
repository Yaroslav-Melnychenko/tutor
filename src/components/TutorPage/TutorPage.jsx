import React, { useEffect, useState } from 'react';
import './TutorPage.scss';

const TutorPage = (props) => {

  const { match: { params: { id } } } = props;
  console.log(id);

  const [tutor, setTutor] = useState({});

  useEffect(() => {
    console.log('did mount', id);
  }, [])

  return(
    <div className="page-container">
      {id}
    </div>
  )
}
export default TutorPage;