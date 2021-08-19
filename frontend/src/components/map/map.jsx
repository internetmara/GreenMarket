import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import { Link } from 'react-router-dom';
import '../styling/map.css'
const key = require("../../config/keys").googleMapsKey;
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class SimpleMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0
    };
    this.lat = 0;
    this.lng = 0;
  };
    
    populateItems() {
      let items = Object.values(this.props.products).concat(Object.values(this.props.services))
      let latit = 0;
      let lngit = 0;
      Geocode.setApiKey(key);
      Geocode.setLanguage("en");
      Geocode.setRegion("us");
      // Geocode.enableDebug();
      Geocode.setLocationType("APPROXIMATE");
      // return items.map(item => {
        for (let i=0; i < items.length; i++) {
         await Geocode.fromAddress(items[i].address).then( 
          res => {
            this.lat = res.results[0].geometry.location.lat
            this.lng = res.results[0].geometry.location.lng
            console.log(this.lat, this.lng)
          }
          ).catch(err => {console.log(err)})
        console.log(this.lat, this.lng)
        this.createItem(this.lat, this.lng)
        }
        
    // })
  }

  createItem(lat, lng, item) {
    return <div>
         < AnyReactComponent
        lat={39.782267}
        lng={-104.8919341}
           text={< Link to="/" > <img alt="N/A" title="N/A" className="GM-icon" src="/logo192.png" /></Link >}
         />
       </div>
  }
// 39.782267, -104.8919341
  render() {
    console.log(this.props)
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