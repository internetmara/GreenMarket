import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import { Link } from 'react-router-dom';
import '../styling/reset.css'
import '../styling/map.css'
const key = require("../../config/keys").googleMapsKey;
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class SimpleMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: []
    };
  };

componentDidUpdate() {
  
  Geocode.setApiKey(key);
  Geocode.setLanguage("en");
  Geocode.setRegion("us");
  // Geocode.enableDebug();
  Geocode.setLocationType("APPROXIMATE");

  let allCoords = [];
  let items = Object.values(this.props.products).concat(Object.values(this.props.services))
  for (let i = 0; i < items.length; i++) {
    const res = Geocode.fromAddress(items[i].address)
    allCoords.push(res)
  }
  Promise.allSettled(allCoords).then(res => {
    this.setState({ coords: res })
  })

}

  populateItems() {
    let items = Object.values(this.props.products).concat(Object.values(this.props.services))
    return items.map( (ele, idx) => {
      if (this.state.coords[idx] === undefined) return null; 
       return this.createItem( this.state.coords[idx][0], this.state.coords[idx][1], ele)
    })
  }

  createItem = (lat, lng, item) => {
    return <AnyReactComponent
                lat={lat}
                lng={lng}
                // lat = { 39.9264719 }
                // lng = { -105.0424311 }
                  //  text={< Link to={`/${item.category}/${item.id}`} > <img alt="N/A" title="N/A" className="GM-icon" src="/logo192.png" /></Link >}
                text={< Link to="/" > <img alt="N/A" title="N/A" className="GM-icon" src="/logo192.png" /></Link >}
              /> 
  }

  render() {
    if (this.props.services instanceof Object && Object.values(this.props.services).length === 0 || this.props.products instanceof Object && Object.values(this.props.products).length === 0) return null;
    // debugger 
    let nodes = this.populateItems()
    return (
      // Important! Always set the container height explicitly
      <div className="map-box" style={{ height: '80vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          center={{lat: this.props.userLat, lng: this.props.userLng}}
          zoom={11}
          >
            {nodes}
            {/* {this.createItem()} */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;