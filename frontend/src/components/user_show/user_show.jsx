import React from 'react';
import '../styling/reset.css'
import '../styling/user_show.css'
import ServiceIndexItem from './service_index_item';
import ProductIndexItem from './service_index_item';


class userShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getServices();
        this.props.getProducts();
    }

    render() {

        // if (!this.props.user.services) {
        //     return null; 
        // }
        
        // if (!this.props.user.products) {
        //     return null; 
        // }

        let { services, products } = this.props.user;
        console.log(services)
        return (
            <div className="users-show-container">
                <marquee className="users-show-header" scrollamount="20">Look at all your items!!</marquee>
                <div className="services-and-products">

                    <div className="user-services-container">
                        <h1 className="user-services-header">Services</h1>
                        <div className="service-map">
                        { services.map (service => (
                            < ServiceIndexItem 
                            name = { service.name }
                            category = { service.category }
                            rate = { service.rate }
                            rateIncrement = { service.rateIncrement }
                            description = { service.description }
                            address = { service.address }
                            /> 
                            )) }
                        </div>
                    </div>

                    <div className="user-products-container">
                        <h1 className="user-products-header">Products</h1>
                        <div className="product-map">
                        { products.map (product => (
                             < ProductIndexItem
                            name = { product.name }
                            category = { product.category }
                            rate = { product.rate }
                            description = { product.description }
                            address = { product.address }
                            /> 
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default userShow;