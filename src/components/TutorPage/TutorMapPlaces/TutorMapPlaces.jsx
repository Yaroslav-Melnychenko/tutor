import React, { Component } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';

class TutorMapPlaces extends Component {

  render() {
    const mapStyles = {
      width: 'calc(100% - 30px)',
      height: '150px',
      top: '15px'
    }

    return(
      <div className="map-container">
        <Map
          style={mapStyles}
          google={this.props.google}
          zoom={10}
          initialCenter={this.props.place}
        />
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(TutorMapPlaces);