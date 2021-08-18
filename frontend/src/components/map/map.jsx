import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
import '../styling/map.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.783964,
      lng: -122.2446203
    },
    zoom: 11
  };

  readItems() {
    let items = Object.values(this.props.products).concat(Object.values(this.props.services))
    items.forEach(item => {
      console.log(item)
      // individual item here - will throw this into a map component item
    })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        {this.readItems()}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          >
          <AnyReactComponent
            lat={37.783964}
            lng={-122.2446203}
            text={<Link to="/"><img alt="N/A" title="N/A" className="GM-icon" src="images/GM.png" /></Link>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;