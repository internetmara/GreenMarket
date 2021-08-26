import React from 'react'
import { Link } from 'react-router-dom'
import ItemList  from './item_list';
import SimpleMap from '../map/map'
import '../styling/reset.css';

class IndexComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: {},
            services: {},
            user: this.props.user
        }
        this.i=0
    }
        
    componentDidMount() {
        this.props.getServices()
        this.props.getProducts()
        // this.forceUpdate()
    }

    filterByGeo() {

    }

    filterByCategory(tag) {
        this.i ++ 
        if (tag === 'Products') {
            this.setState({ services: {}, products: this.props.products })
        } else if (tag === 'Services') {
            this.setState({ products: {}, services: this.props.services })
        } else {
            this.setState({ products: this.props.products, services: this.props.services })
        }
    }

    render() {
        return (
            <div className="index-root">
                <Link to="/"><h2 className="map-header">Local Goods & Services</h2></Link>
                <div className="filters">
                    <h4>Filter By:</h4>
                    <p onClick={() => this.filterByCategory('All')}>All</p>
                    <p onClick={() => this.filterByCategory('Products')}>Products</p>
                    <p onClick={() => this.filterByCategory('Services')}>Services</p>
                </div>
                <div className="index-items">
                    <ItemList 
                        products={this.i > 0 ? this.state.products : this.props.products} 
                        services={this.i > 0 ? this.state.services : this.props.services}
                    />
                    {console.log('re-render!!')}
                    <SimpleMap 
                        products={this.i > 0 ? this.state.products : this.props.products}
                        services={this.i > 0 ? this.state.services : this.props.services}
                        user={this.state.user} 
                        coordsLat={this.state.user.coordsLat} 
                        coordsLng={this.state.user.coordsLng} 
                    />
                </div>
            </div>
        )
    }
}

export default IndexComponent;