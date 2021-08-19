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
  };
    
  populateItems() {
    Geocode.setApiKey(key);
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
    // Geocode.enableDebug();
    Geocode.setLocationType("APPROXIMATE");

    let allCoords = [];
    let items = Object.values(this.props.products).concat(Object.values(this.props.services))
    items.forEach( async (ele, idx) => {
      const res = await Geocode.fromAddress(ele.address)
      const { lat, lng } = res.results[0].geometry.location;
      // ATTEMPT
      allCoords.push([lat, lng])
      // ATTEMPT
    })
    
    // ATTEMPT
    console.log(allCoords)
    return items.map( (ele, idx) => {
      return this.createItem(allItems[idx][0], allItems[idx][1], ele)
    })
    // ATTEMPT
  }

  createItem = (lat, lng, item) => {
    console.log(lat, lng)
    return (
      <div>
        <AnyReactComponent
            lat={lat}
            lng={lng}
            // lat = { 39.9264719 }
            // lng = { -105.0424311 }
              //  text={< Link to={`/${item.category}/${item.id}`} > <img alt="N/A" title="N/A" className="GM-icon" src="/logo192.png" /></Link >}
            text={< Link to="/" > <img alt="N/A" title="N/A" className="GM-icon" src="/logo192.png" /></Link >}
        />
      </div>
    )
  }
  // lat = { 39.9264719 }
  // lng = { -105.0424311 }

  render() {
    // console.log(this.props)
    return (
      // Important! Always set the container height explicitly

      <div className="map-box" style={{ height: '80vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          center={{lat: this.props.userLat, lng: this.props.userLng}}
          zoom={11}
          >
            {this.populateItems()}
            {/* {this.createItem()} */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;