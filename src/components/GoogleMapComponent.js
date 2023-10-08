import React from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from 'react-google-maps';

function GoogleMapComponent() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 40.7128, lng: -74.0060 }} // Replace with your desired coordinates
    >
      <Marker position={{ lat: 40.7128, lng: -74.0060 }} /> {/* Marker at the same coordinates */}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(GoogleMapComponent));

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}
