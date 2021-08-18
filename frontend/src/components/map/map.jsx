import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import { Link } from 'react-router-dom';
import '../styling/map.css'
const key = require("../../config/keys").googleMapsKey;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

Geocode.setApiKey(key);
Geocode.setLanguage("en");
Geocode.setRegion("us");
// Geocode.enableDebug();
Geocode.setLocationType("APPROXIMATE");


class SimpleMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userLat: '',
      userLng: '',
      zoom: 11
    }
  }
  // static defaultProps = {
  //   center: {
  //     lat: userLat,
  //     lng: userLng
  //   },
  //   zoom: 11
  // };
  
  setCenter() {
    let { latitude, longitude } = ''
    Geocode.fromAddress(this.props.user.address).then(
      res => {
        let { latitude, longitude } = res.results[0].geometry.location
        console.log(lat, lng)
      }
    )
      this.setState({ userLat: latitude, userLng: longitude })
  }
  
  populateItems() {
    let items = Object.values(this.props.products).concat(Object.values(this.props.services))

    return items.map(item => {
      let {lat, lng} = ''
      Geocode.fromAddress(item.address).then( 
        res => {
          let { lat, lng } = res.results[0].geometry.location
          console.log(lat, lng)
        }
      )
      return <div>
          < AnyReactComponent
            lat = {lat}
            lng = {lng}
            text = {< Link to = "/" > <img alt="N/A" title="N/A" className="GM-icon" src="/logo192.png" /></Link >}
            />
      </div>

    })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          >
            {this.populateItems()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;