import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
import '../styling/reset.css'
import '../styling/map.css'
const key = require("../../config/keys").googleMapsKey;
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class SimpleMap extends Component {
  constructor(props) {
    super(props)
    
  };


  populateItems() {
    let items = Object.values(this.props.products).concat(Object.values(this.props.services))
    return items.map( ele => {

      return this.createItem(ele.coordsLat, ele.coordsLng, ele)
    })
  }

  createItem = (lat, lng, item) => {
    return <AnyReactComponent
        lat={lat}
        lng={lng}
        text={< Link to="/" > <img alt="N/A" title="N/A" className="GM-icon" src="/logo192.png" /></Link >}
      /> 
  }

  render() {
    if (this.props.services instanceof Object && Object.values(this.props.services).length === 0 || this.props.products instanceof Object && Object.values(this.props.products).length === 0) return null;
    let nodes = this.populateItems()
    
    return (
      // Important! Always set the container height explicitly
      <div className="map-box" style={{ height: '80vh', width: '80%' }} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          center={{ lat: this.props.coordsLat, lng: this.props.coordsLng}}
          zoom={11}
          >
            {nodes}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;