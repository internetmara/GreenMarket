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
            user: this.props.user,
            allGeoItems: 'no',
            productFilters: 'no',
            serviceFilters: 'no',
            filterValue: ''
        }
        this.i=0;
    }
        
    componentDidMount() {
        this.props.getServices()
        this.props.getProducts()
    }

    filterByGeo(items) {
        let itemArray = Object.values(items)
        let localItems = []
        let userLat = this.props.user.coordsLat
        let userLng = this.props.user.coordsLng
        let itemLat = 0;
        let itemLng = 0;
        let distLat = 0
        let distLng = 0

        itemArray.forEach( item => {
            if (item.coordsLat !== undefined) {
                itemLat = item.coordsLat
                itemLng = item.coordsLng
                distLat = userLat - itemLat
                distLng = userLng - itemLng
                
                if (distLat < 1 && distLat > -1 && distLng < 1 && distLng > -1) {
                    localItems.push(item)
                }
            }
        })
        return localItems
    }

    setGlobalView(arg) {
       this.setState({ allGeoItems: arg })
    }

    filterByCategory(tag) {
        this.i ++ 
        if (tag === 'Products') {
            this.setState({ services: {}, products: this.props.products, productFilters: 'yes' })
        } else if (tag === 'Services') {
            this.setState({ products: {}, services: this.props.services, serviceFilters: 'yes' })
        } else {
            this.setState({
                products: this.props.products, services: this.props.services, productFilters: 'no', serviceFilters: 'no' })
        }
    }

    productsFilter(cat) {
        let filtered = {};
        if (cat === 'Food') {
            Object.values(this.props.products).forEach( prod => {
                if (prod.category === 'Food') {
                    filtered[prod._id] = prod
                }
            })
            this.setState({ products: filtered })
        } else if (cat === 'Clothing') {
            Object.values(this.props.products).forEach(prod => {
                if (prod.category === 'Clothing') {
                    filtered.push(prod)
                }
            })
            this.setState({ products: filtered })
        } else if (cat === 'Housing') {
            Object.values(this.props.products).forEach(prod => {
                if (prod.category === 'Housing') {
                    filtered.push(prod)
                }
            })
            this.setState({ products: filtered })
        } else if (cat === 'Misc') {
            Object.values(this.props.products).forEach(prod => {
                if (prod.category === 'Misc') {
                    filtered.push(prod)
                }
            })
            this.setState({ products: filtered })
        }
    }

    servicesFilter(cat) {
        let filtered = {};
        if (cat === 'Crafts') {
            Object.values(this.props.services).forEach(prod => {
                if (prod.category === 'Crafts') {
                    filtered[prod._id] = prod
                }
            })
            this.setState({ services: filtered })
        } else if (cat === 'Tech Support') {
            Object.values(this.props.services).forEach(prod => {
                if (prod.category === 'Tech Support') {
                    filtered[prod._id] = prod
                }
            })
            this.setState({ services: filtered })
        } else if (cat === 'Tech Support') {
            Object.values(this.props.services).forEach(prod => {
                if (prod.category === 'Tech Support') {
                    filtered[prod._id] = prod
                }
            })
            this.setState({ services: filtered })
        } else if (cat === 'Caregiving') {
            Object.values(this.props.services).forEach(prod => {
                if (prod.category === 'Caregiving') {
                    filtered[prod._id] = prod
                }
            })
            this.setState({ services: filtered })
        } else if (cat === 'Home Improvement') {
            Object.values(this.props.services).forEach(prod => {
                if (prod.category === 'Home Improvement') {
                    filtered[prod._id] = prod
                }
            })
            this.setState({ services: filtered })
        } else if (cat === 'Misc') {
            Object.values(this.props.services).forEach(prod => {
                if (prod.category === 'Misc') {
                    filtered[prod._id] = prod
                }
            })
            this.setState({ services: filtered })
        }
    }

    masterFilter() {
        if (this.state.productFilters === 'no' && this.state.serviceFilters === 'no') {
            return <div>
                <p onClick={() => this.filterByCategory('All')}>All</p>
                <p onClick={() => this.filterByCategory('Products')}>Products</p>
                <p onClick={() => this.filterByCategory('Services')}>Services</p>
            </div>
        } else if (this.state.productFilters === 'yes') {
            return <div>
                <p onClick={() => this.productsFilter('Food')}>Food</p>
                <p onClick={() => this.productsFilter('Clothing')}>Clothing</p>
                <p onClick={() => this.productsFilter('Housing')}>Housing</p>
                <p onClick={() => this.productsFilter('Misc')}>Misc</p>
                <p onClick={() => this.filterByCategory('All')}>All</p>
            </div>
        } else if (this.state.serviceFilters === 'yes') {
            return <div>
                <p onClick={() => this.servicesFilter('Crafts')}>Crafts</p>
                <p onClick={() => this.servicesFilter('Tech Support')}>Tech Support</p>
                <p onClick={() => this.servicesFilter('Caregiving')}>Caregiving</p>
                <p onClick={() => this.servicesFilter('Home Improvement')}>Home Improvement</p>
                <p onClick={() => this.servicesFilter('Misc')}>Misc</p>
                <p onClick={() => this.filterByCategory('All')}>All</p>
            </div>
        }
    }
    
    render() {
        let prods = this.i > 0 ? Object.values(this.state.products) : Object.values(this.props.products)
        let servs = this.i > 0 ? Object.values(this.state.services) : Object.values(this.props.services)

        let localProds = this.filterByGeo(prods)
        let localServs = this.filterByGeo(servs)

        return (
            <div className="index-root">
                <Link to="/"><h2 className="map-header">Local Goods & Services</h2></Link>
                <div className="filters">
                    <h4>Filter By:</h4>
                    {this.masterFilter()}
                    {/* <p onClick={() => this.filterByCategory('All')}>All</p>
                    <p onClick={() => this.filterByCategory('Products')}>Products</p>
                    <p onClick={() => this.filterByCategory('Services')}>Services</p> */}
                </div>
                <div className="index-items">
                    <ItemList 
                        products={ this.state.allGeoItems === 'yes' ? prods : localProds } 
                        services={ this.state.allGeoItems === 'yes' ? servs : localServs }
                    />
                    <SimpleMap 
                        products={ this.state.allGeoItems === 'yes' ? prods : localProds }
                        services={ this.state.allGeoItems === 'yes' ? servs : localServs }
                        user={this.state.user} 
                        coordsLat={this.state.user.coordsLat} 
                        coordsLng={this.state.user.coordsLng} 
                    />
                </div>
                <div className="geo-filter">
                    <p>Want to see products and services outside of your area listed?</p>
                    <button onClick={() => this.setGlobalView('yes')}>Yes</button>
                    <button onClick={() => this.setGlobalView('no')}>No</button>
                </div>
            </div>
        )
    }
}

export default IndexComponent;