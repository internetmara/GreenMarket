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
      
    }
  };
    
  randomFunc() {
    this.populateItems().then(res => { 
      debugger 
    })
  }

  async populateItems() {
    Geocode.setApiKey(key);
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
    // Geocode.enableDebug();
    Geocode.setLocationType("APPROXIMATE");

    let allCoords = [];
    let items = Object.values(this.props.products).concat(Object.values(this.props.services))
    
    for (let i = 0; i < items.length; i++ ) {
      const res = await Geocode.fromAddress(items[i].address)
      const { lat, lng } = res.results[0].geometry.location;
      
      allCoords.push([lat, lng])
    }
    debugger
    
    // return items.map( (ele, idx) => {
    //   if (allCoords[idx] === undefined) return null; 
    //   return this.createItem( allCoords[idx][0], allCoords[idx][1], ele)
    // })
    return 'string'
  }

  createItem = (lat, lng, item) => {
    // console.log(lat, lng)
    
    return ( <AnyReactComponent
            // lat={lat}
            // lng={lng}
            lat = { 39.9264719 }
            lng = { -105.0424311 }
              //  text={< Link to={`/${item.category}/${item.id}`} > <img alt="N/A" title="N/A" className="GM-icon" src="/logo192.png" /></Link >}
            text={< Link to="/" > <img alt="N/A" title="N/A" className="GM-icon" src="/logo192.png" /></Link >}
        /> )
  }

  render() {
    
    if (this.props.services instanceof Object && Object.values(this.props.services).length === 0 || this.props.products instanceof Object && Object.values(this.props.products).length === 0) return null;
    // if (this.props.userLat === 0 || this.props.userLng === 0) return null;
    
    return (
      // Important! Always set the container height explicitly

      <div className="map-box" style={{ height: '80vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          center={{lat: this.props.userLat, lng: this.props.userLng}}
          zoom={11}
          >
            {/* {this.populateItems()} */}
            {this.randomFunc()}
            {/* {this.createItem()} */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;