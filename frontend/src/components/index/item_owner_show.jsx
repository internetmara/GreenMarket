import React from 'react';
import ServiceIndexItem from '../user_show/service_index_item';
import ProductIndexItem from '../user_show/product_index_item';

class ItemOwnerShow extends React.Component {

    readProducts(userProducts) {
        return userProducts.map( productId => {
            return < ProductIndexItem
                picture={this.props.products[productId].picture}
                name={this.props.products[productId].name}
                category={this.props.products[productId].category}
                rate={this.props.products[productId].rate}
                rateIncrement={this.props.products[productId].rateIncrement}
                description={this.props.products[productId].description}
                address={this.props.products[productId].address}
                
            />
        })
    }

    readServices(userServices) {
        return userServices.map( serviceId => (
                < ServiceIndexItem
                    picture={this.props.services[serviceId].picture} 
                    name={this.props.services[serviceId].name}
                    category={this.props.services[serviceId].category}
                    rate={this.props.services[serviceId].rate}
                    rateIncrement={this.props.services[serviceId].rateIncrement}
                    description={this.props.services[serviceId].description}
                    address={this.props.services[serviceId].address}
                />
        ))
    }


    render() {
        if (this.props.user === undefined) return null;

        const userProducts = this.props.users[this.props.ownerId].products
        const userServices = this.props.users[this.props.ownerId].services

        return (
            <div >
                <p>{this.props.user.username}</p>
                <div className="owner-lists" >
                    <div className="user-show-product-list" >
                        {this.readProducts(userProducts)}
                    </div>
                    <div className="user-show-service-list" >
                        {this.readServices(userServices)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemOwnerShow;