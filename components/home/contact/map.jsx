import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const defaultCenter = { lat: 49.749178377799154, lng: 18.62996464226046 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={ defaultCenter }
      defaultOptions={ defaultOptions }
    >
    
      <Marker position={ defaultCenter } />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: '100%' };
const mapElementStyle = { height: '100%' };

export default function GoogleMaps(){
  return (
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCamI1L0aZmjb4VwMbpGBopYdmycG9nNI"
      loadingElement={<div style={ loadingElementStyle } />}
      containerElement={<div className="map-container" />}
      mapElement={<div style={ mapElementStyle } />}
    />
  );
}