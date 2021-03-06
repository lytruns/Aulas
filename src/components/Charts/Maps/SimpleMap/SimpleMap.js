import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -59.95,
      lng: -30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className={"SimpleMap"} style={{ height: '300px', width: '600px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'BIzaSyC9OMSh2N5yiskslWXRquq1SBj3DEdV0qg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-59.955413}
            lng={-30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
