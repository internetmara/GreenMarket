import React from 'react'
import { Link } from 'react-router-dom'
import SimpleMap from '../map/map'
import Geocode from "react-geocode";
import '../styling/reset.css';
const key = require("../../config/keys").googleMapsKey;
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class IndexComponent extends React.Component {
    constructor(props) {
            super(props)
        this.state = {
            userLat: 0,
            userLng: 0
        }
        this.userLat = 0;
        this.userLng = 0;
    }
        
        componentDidMount() {
            this.props.getServices()
            this.props.getProducts()
        }

        componentDidUpdate() {
            Geocode.setApiKey(key);
            Geocode.setLanguage("en");
            Geocode.setRegion("us");
            // Geocode.enableDebug();
            Geocode.setLocationType("APPROXIMATE");

            if (Object.values(this.props.user).length === 0) return null;
            Geocode.fromAddress(this.props.user.address).then(
                res => {
                    this.setState({
                    userLat: res.results[0].geometry.location.lat,
                    userLng: res.results[0].geometry.location.lng
                    })
                }
            )
        }
        
    render() {
        return (
            <div>
                <Link to="/"><h2 className="map-header">Index/Map Component</h2></Link>
                <SimpleMap products={this.props.products} services={this.props.services} user={this.props.user} userLat={this.state.userLat} userLng={this.state.userLng} />
            </div>
        )
    }
}

export default IndexComponent;