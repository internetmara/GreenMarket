import React from 'react'
import { Link } from 'react-router-dom'
import ItemList  from './item_list';
import SimpleMap from '../map/map'
import Geocode from "react-geocode";
import '../styling/reset.css';
const key = require("../../config/keys").googleMapsKey;
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class IndexComponent extends React.Component {
    constructor(props) {
            super(props)
    }
        
    componentDidMount() {
        this.props.getServices()
        this.props.getProducts()
    }

    render() {
        // console.log(this.props.user)
        return (
            <div>
                <Link to="/"><h2 className="map-header">Local Goods & Services</h2></Link>
                <ItemList products={this.props.products} services={this.props.services} />
                <SimpleMap products={this.props.products} services={this.props.services} user={this.props.user} coordsLat={this.props.user.coordsLat} coordsLng={this.props.user.coordsLng} />
            </div>
        )
    }
}

export default IndexComponent;