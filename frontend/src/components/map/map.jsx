import React, { Component} from 'react';
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
  };

  // static defaultProps = {
  //   zoom: 11,
  // }
  
  populateItems() {
    let items = Object.values(this.props.products).concat(Object.values(this.props.services))

    return items.map(item => {
      let {lat, lng} = ''
      Geocode.fromAddress(item.address).then( 
        res => {
          let { lat, lng } = res.results[0].geometry.location
          
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
        {/* {console.log(this.props)} */}
        {console.log({ lat: this.props.userLat, lng: this.props.userLng })}
        {console.log('props' + this.props)}
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