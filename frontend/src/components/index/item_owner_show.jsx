import React from 'react';
import ServiceIndexItem from '../user_show/service_index_item';
import ProductIndexItem from '../user_show/product_index_item';

class ItemOwnerShow extends React.Component {

    readProducts(userProducts) {
        
        return userProducts.map( (productId, idx) => {
            return < ProductIndexItem
                key={idx}
                id={this.props.products[productId]._id}
                picture={this.props.products[productId].picture}
                name={this.props.products[productId].name}
                category={this.props.products[productId].category}
                rate={this.props.products[productId].rate}
                rateIncrement={this.props.products[productId].rateIncrement}
                description={this.props.products[productId].description}
                address={this.props.products[productId].address}
                coordsLat={this.props.products[productId].coordsLat}
                coordsLng={this.props.products[productId].coordsLng}
                owner={this.props.products[productId].user}
                updateProduct={this.props.updateProduct}
                deleteProduct={this.props.deleteProduct}
                user={this.props.currentUser}
                noButtons={'y'}
            />
        })
    }

    readServices(userServices) {
        
        return userServices.map( (serviceId, idx) => (
                < ServiceIndexItem
                    key={idx}
                    id={this.props.services[serviceId]._id}
                    picture={this.props.services[serviceId].picture} 
                    name={this.props.services[serviceId].name}
                    category={this.props.services[serviceId].category}
                    rate={this.props.services[serviceId].rate}
                    rateIncrement={this.props.services[serviceId].rateIncrement}
                    description={this.props.services[serviceId].description}
                    address={this.props.services[serviceId].address}
                    coordsLat={this.props.services[serviceId].coordsLat}
                    coordsLng={this.props.services[serviceId].coordsLng}
                    owner={this.props.services[serviceId].user}
                    updateService={this.props.updateService}
                    deleteService={this.props.deleteService}
                    user={this.props.currentUser}
                    noButtons={'y'}
                />
        ))
    }


    render() {
        if (this.props.users.products === undefined || this.props.users.services === undefined) return null;
        
        const userProducts = this.props.users.products
        const userServices = this.props.users.services
        
        return (
            <div >
                <p>{this.props.users.username}</p>
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