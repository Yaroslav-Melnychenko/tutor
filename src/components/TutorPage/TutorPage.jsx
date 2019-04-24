import React, { useEffect, useState } from 'react';

const TutorPage = (props) => {

  const { match: { params: { id } } } = props;
  console.log(id);

  const [tutor, setTutor] = useState({});

  useEffect(() => {
    console.log('did mount', id);
  }, [])

  return(
    <div>TutorPage</div>
  )
}
export default TutorPage;