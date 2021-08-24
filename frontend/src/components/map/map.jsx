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


  populateProducts() {
    let products = Object.values(this.props.products)
    return products.map( ele => {
      if (ele.coordsLat !== undefined ) {
        return this.createProduct(ele.coordsLat, ele.coordsLng, ele)
      } 
    })
  }

  populateServices() {
    let services = Object.values(this.props.services)
    return services.map(ele => {
      if (ele.coordsLat !== undefined) {
        return this.createItem(ele.coordsLat, ele.coordsLng, ele)
      }
    })
  }

  createProduct(lat, lng, item) {
    
    return <div key={item._id}>
      <AnyReactComponent
          lat={lat}
          lng={lng}
          text={< Link to={`/product/${item._id}`} > <img alt="N/A" title="N/A" className="GM-icon" src={item.picture} /></Link >}
        /> 
    </div>

  }

  createService(lat, lng, item) {
    console.log(item)
    return <div key={item._id}>
      <AnyReactComponent
        lat={lat}
        lng={lng}
        text={< Link to={`/service/${item._id}`} > <img alt="N/A" title="N/A" className="GM-icon" src={item.picture} /></Link >}
      />
    </div>
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