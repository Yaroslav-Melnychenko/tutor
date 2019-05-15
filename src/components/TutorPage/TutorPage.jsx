import React, { useEffect, useState } from 'react';
import ShortTutorInfo from './ShortTutorInfo/ShortTutorInfo';
import TutorDescription from './TutorDescription/TutorDescription';
// import TutorMapPlaces from './TutorMapPlaces/TutorMapPlaces';
import TutorSidebar from './TutorSidebar/TutorSidebar';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import './TutorPage.scss';

const TutorPage = (props) => {

  const { match: { params: { id } } } = props;

  const [tutor, setTutor] = useState();

  useEffect(() => {
    axios.get('http://localhost:4000/tutors/' + id)
    .then(res => {
        setTutor(res.data);
      });
  }, []);

  console.log(props);

  return(
    <div className="page-container">
        {tutor ? (
          <Grid container spacing={24}>
            <Grid item xs={9}>
              <div className="info-container">
                <ShortTutorInfo {...tutor} />
              </div>
              <div className="info-container withpadding">
                <TutorDescription description={tutor.description} />
              </div>
            </Grid>
            <Grid item xs={3}>
              <TutorSidebar price={tutor.price} place={tutor.place} />
            </Grid>
          </Grid>
        ) : null}
    </div>
  )
}
export default TutorPage;