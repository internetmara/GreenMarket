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
    this.lat = 0;
    this.lng = 0;
  };
    
    populateItems() {
      
      let items = Object.values(this.props.products).concat(Object.values(this.props.services))
      return items.map(item => {
        Geocode.setApiKey(key);
        Geocode.setLanguage("en");
        Geocode.setRegion("us");
        // Geocode.enableDebug();
        Geocode.setLocationType("APPROXIMATE");
        
        Geocode.fromAddress(item.address).then( 
        res => {
          console.log(res)
          // console.log(res.results[0].geometry.location.lat)
          // ({ lat, lng } = res.results[0].geometry.location)
          this.lat = res.results[0].geometry.location.lat
          this.lng = res.results[0].geometry.location.lng
        })
        console.log(`item${item.name}` + this.lat, this.lng)
      return <div>
        < AnyReactComponent
          lat={this.lat}
          lng={this.lng}
          text={< Link to="/" > <img alt="N/A" title="N/A" className="GM-icon" src="/logo192.png" /></Link >}
        />
      </div>
    })
  }

  render() {
    return (
      // Important! Always set the container height explicitly

      <div className="map-box" style={{ height: '80vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          center={{lat: this.props.userLat, lng: this.props.userLng}}
          zoom={11}
          >
            {this.populateItems()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;