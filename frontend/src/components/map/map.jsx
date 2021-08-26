import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import { Link } from 'react-router-dom';
import '../styling/reset.css'
import '../styling/map.css'
const key = require("../../config/keys").googleMapsKey;
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class SimpleMap extends Component {
  constructor(props) {
    super(props) 
  }


  populateProducts() {
    let products = Object.values(this.props.products)
    return products.map( ele => {
      if (ele.coordsLat !== undefined ) {
        return this.createProduct(ele)
      } else {
        return null
      }
    })
  }

  populateServices() {
    let services = Object.values(this.props.services)
    return services.map(ele => {
      if (ele.coordsLat !== undefined) {
        return this.createService(ele)
      } else {
        return null
      }
    })
  }

  createProduct(item) {
    return <AnyReactComponent
        key={item._id}
        lat={item.coordsLat}
        lng={item.coordsLng}
        text={< Link to={`/product/${item._id}`} > <img alt="N/A" title="N/A" className="GM-icon" src={item.picture} /></Link >}
      /> 
  }

  createService(item) {
    return <AnyReactComponent
        key={item._id}
        lat={item.coordsLat}
        lng={item.coordsLng}
        text={< Link to={`/service/${item._id}`} > <img alt="N/A" title="N/A" className="GM-icon" src={item.picture} /></Link >}
      />
  }

  render() {
    if (this.props.services instanceof Object && Object.values(this.props.services).length === 0 || this.props.products instanceof Object && Object.values(this.props.products).length === 0) return null;
    let products = this.populateProducts()
    let services = this.populateServices()

    return (
      // Important! Always set the container height explicitly
      <div className="map-box" style={{ height: '80vh', width: '80%' }} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          center={{ lat: this.props.coordsLat, lng: this.props.coordsLng}}
          zoom={11}
          >
            {products}
            {services}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;