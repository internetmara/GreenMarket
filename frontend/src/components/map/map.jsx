import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';
import '../styling/reset.css'
import '../styling/map.css'
const key = require("../../config/keys").googleMapsKey;
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  populateProducts() {
    let products = this.props.products
    if (products.length > 0) {
      return products.map( ele => {
        if (ele.coordsLat !== undefined ) {
          return this.createProduct(ele)
        } else {
          return null
        }
      })
    }
  }

  populateServices() {
    let services = this.props.services
    if (services.length > 0) {
      return services.map(ele => {
        if (ele.coordsLat !== undefined) {
          return this.createService(ele)
        } else {
          return null
        }
      })
    } 
  }

  showItem(id) {
    let el = document.getElementsByClassName(id)
    Object.values(el)[0].style.display = 'flex'
  }

  createProduct(item) {
    return <AnyReactComponent
        key={item._id}
        lat={item.coordsLat}
        lng={item.coordsLng}
        text={<img className="map-img" alt="N/A" title="N/A" src={item.picture} onClick={() => this.showItem(`item-show-${item._id}`)}/>}
        /> 
  }

  createService(item) {
    return <AnyReactComponent
        key={item._id}
        lat={item.coordsLat}
        lng={item.coordsLng}
        text={<img className="map-img" alt="N/A" title="N/A" src={item.picture} onClick={() => this.showItem(`item-show-${item._id}`)} />}
      />
  }

  render() {
    // if (this.props.services instanceof Object && Object.values(this.props.services).length === 0 || this.props.products instanceof Object && Object.values(this.props.products).length === 0) return null;
    let products = this.populateProducts()
    let services = this.populateServices()
    return (
      // Important! Always set the container height explicitly
      <div className="map-box" style={{ height: '70vh', width: '60vw' }} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          center={{ lat: this.props.coordsLat, lng: this.props.coordsLng}}
          zoom={12}
          >
            {products}
            {services}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;