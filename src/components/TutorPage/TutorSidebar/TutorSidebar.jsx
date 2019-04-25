import React from 'react';
import TutorMapPlaces from '../TutorMapPlaces/TutorMapPlaces';
import './TutorSidebar.scss';

const TutorSidebar = (props) => {

  const { price, place } = props;

  return (
    <div className="sidebar-container">
      <div className="sidebar-item">
        <span className="price-label">Ціна: <span className="price-value">{price}</span> грн/год</span>
      </div>
      <div className="sidebar-item min-height-200 center-text">
        <div className="place-title">Місто Київ</div>
        <div className="round-map-container">
          <TutorMapPlaces place={place} />
        </div>
      </div>
    </div>
  );
  
}
export default TutorSidebar;