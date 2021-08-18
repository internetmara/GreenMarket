import React from 'react'
import { Link } from 'react-router-dom'
import SimpleMap from '../map/map'
import Geocode from "react-geocode";
const key = require("../../config/keys").googleMapsKey;
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class IndexComponent extends React.Component {
    constructor(props) {
            super(props)
        this.userLat = 0;
        this.userLng = 0;
    }
        
        componentDidMount() {
            this.props.getServices()
            this.props.getProducts()
            // this.setCenter()
        }
        
        // ** need to **
        // index all products and services
        // do this through simple get axios calls
        // show each individual item
        // iterate through all items to get these && stored in frontend state
        // show each individual item's seller
        // send a axios get request for product owner info - send product owner's id
        
    setCenter() {
        Geocode.setApiKey(key);
        Geocode.setLanguage("en");
        Geocode.setRegion("us");
        // Geocode.enableDebug();
        Geocode.setLocationType("APPROXIMATE");

        if (Object.values(this.props.user).length === 0) return null;
        Geocode.fromAddress(this.props.user.address).then(
            res => {
                this.userLat = res.results[0].geometry.location.lat
                this.userLng = res.results[0].geometry.location.lng
            }
        )
        // console.log("lat" + this.userLat)
        // console.log("lng" + this.userLng)
    }


    render() {
        this.setCenter()
        return (
            <div>
                <Link to="/"><h2 className="map-header">Index/Map Component</h2></Link>
                <SimpleMap products={this.props.products} services={this.props.services} user={this.props.user} userLat={this.userLat} userLng={this.userLng} />
            </div>
        )
    }
}

export default IndexComponent;