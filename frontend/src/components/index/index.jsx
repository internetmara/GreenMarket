import React from 'react'
import { Link } from 'react-router-dom'
import ItemList  from './item_list';
import SimpleMap from '../map/map'
import '../styling/reset.css';

class IndexComponent extends React.Component {
    constructor(props) {
            super(props)
    }
        
    componentDidMount() {
        this.props.getServices()
        this.props.getProducts()
    }

    render() {
        return (
            <div className="index-root">
                <Link to="/"><h2 className="map-header">Local Goods & Services</h2></Link>
                <div className="index-items">
                    <ItemList products={this.props.products} services={this.props.services} />
                    <SimpleMap products={this.props.products} services={this.props.services} user={this.props.user} coordsLat={this.props.user.coordsLat} coordsLng={this.props.user.coordsLng} />
                </div>
            </div>
        )
    }
}

export default IndexComponent;