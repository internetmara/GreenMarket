import React from 'react';
import '../styling/reset.css'
import '../styling/user_show.css'
import ServiceIndexItem from './service_index_item';
import ProductIndexItem from './product_index_item';


class userShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getServices();
        this.props.getProducts();
        this.props.getUser(this.props.user.id);
    }

    render() {
        if (!this.props.user.data) {
            return null
        };
        // console.log(this.props.user.data)
        let { services, products } = this.props.user.data;
        console.log(products)
        return (
            <div className="users-show-container">
                <marquee className="users-show-header" scrollamount="20">Look at all your items!!</marquee>
                <div className="services-and-products">

                    <div className="user-services-container">
                        <h1 className="user-services-header">Services</h1>
                        <div className="service-map">
                        { services.map (service => (
                            < ServiceIndexItem
                            picture = { service.picture } 
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
                            {/* {console.log(products)} */}
                        { products.map (product => (
                            < ProductIndexItem
                            picture = { product.picture }
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