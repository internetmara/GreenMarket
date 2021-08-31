import React from 'react';
import '../styling/reset.css'
import '../styling/user_show.css'
import ServiceIndexItem from './service_index_item';
import ProductIndexItem from './product_index_item';


class userShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            userShow: 'show'
        }
    }

    componentDidMount() {
        this.props.getServices();
        this.props.getProducts();
        this.props.getUser(this.props.user.id);
    }

    render() {
        if (!this.props.user || Object.values(this.props.products).length === 0 || Object.values(this.props.services).length === 0) {
            return null
        };
        let { services, products } = this.props.user;
        let servicesMap = []
            if (services.length > 0) {
              servicesMap = services.map (serviceId => {
                  if (this.props.services[serviceId]) {
                    return < ServiceIndexItem
                    key = { services.serviceId } 
                    picture = { this.props.services[serviceId].picture } 
                    name = { this.props.services[serviceId].name }
                    category = { this.props.services[serviceId].category }
                    rate = { this.props.services[serviceId].rate }
                    rateIncrement = { this.props.services[serviceId].rateIncrement }
                    description = { this.props.services[serviceId].description }
                    address = { this.props.services[serviceId].address }
                /> }
              })};
            let productsMap = []
            if (products.length > 0) {
                productsMap = products.map (productId => {
                if (this.props.products[productId]) {
                    return < ProductIndexItem
                    key = {products.productId}
                    picture = { this.props.products[productId].picture }
                    name = { this.props.products[productId].name }
                    category = { this.props.products[productId].category }
                    rate = { this.props.products[productId].rate }
                    description = { this.props.products[productId].description }
                    address = { this.props.products[productId].address }
                />  }
                })}
        return (
            <div className="users-show-container">
                <div className="users-show-header">All listings</div>
                <div className="services-and-products">
                    <div className="user-services-container">
                        <h1 className="user-services-header">Services</h1>
                        <div className="service-map">
                            {servicesMap}
                        </div>
                    </div>

                    <div className="user-products-container">
                        <h1 className="user-products-header">Products</h1>
                        <div className="product-map">
                            {productsMap}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        { this.state.userShow === 'show' ?
                            <div>
                                <h3>Profile: {this.props.user.username}</h3>
                                <p>Username: {this.props.user.username}</p>
                                <p>Email: {this.props.user.email}</p>
                                <p>Address: {this.props.user.address}</p>
                                <button onClick={() => this.setState({ userShow: 'edit' })}>Edit Profile</button>
                            </div>
                        :
                            <div>
                                <h3>Profile: {this.props.user.username}</h3>
                                <label >Username:
                                    <input type="text" value={this.props.user.username}/>
                                </label>
                                <br />
                                <label >Email:
                                    <input type="text" value={this.props.user.email}/>
                                </label>
                                <br />
                                <label >Address:
                                    <input type="text" value={this.props.user.address}/>
                                </label>
                                <br />
                                <button>Update Profile</button>
                                <br />
                                <button onClick={() => this.setState({ userShow: 'show' })} >Discard Changes</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default userShow;