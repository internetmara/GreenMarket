import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.783964,
      lng: -122.2446203
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          google={this.props.google}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.783964}
            lng={-122.2446203}
            text={<Link to="/dispensaries/1"><img alt="Harborside" title="Harborside" className="dispensary-icon" src="/images/GM.png" /></Link>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBNX1tlWgo19fKUYNBxB9JmKOtmHabd99g'
})(MapContainer);
