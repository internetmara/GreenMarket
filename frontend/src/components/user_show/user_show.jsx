import React from 'react';
import '../styling/reset.css'
import '../styling/user_show.css'
import ServiceIndexItem from './service_index_item';
import ProductIndexItem from './product_index_item';


class userShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            user: { 
            email: this.props.user.email,
            username: this.props.user.username,
            address: this.props.user.address,
            coordsLat: this.props.user.coordsLat,
            coordsLng: this.props.user.coordsLng
            // email: '',
            // username: '',
            // address: '',
            // coordsLat: 0,
            // coordsLng: 0
            
        },
            userShow: 'show'
        }
        this.handleUserSubmit = this.handleUserSubmit.bind(this)
    }

    componentDidMount() {
        this.props.getServices();
        this.props.getProducts();
        this.props.getUser(this.props.user.id);
    }

    updateField(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleUserSubmit(e) {
        e.preventDefault()
        this.props.updateUser(this.state)
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
                                    <input type="text" onChange={() => this.updateField('username')} value={this.state.user.username}/>
                                </label>
                                <br />
                                <label >Email:
                                    <input type="text" onChange={() => this.updateField('email')} value={this.state.user.email}/>
                                </label>
                                <br />
                                <label >Address:
                                    <input type="text" onChange={() => this.updateField('address')} value={this.state.user.address}/>
                                </label>
                                <br />
                                <button onClick={()=> this.handleUserSubmit()}>Update Profile</button>
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