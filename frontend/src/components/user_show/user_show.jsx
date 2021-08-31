import React from 'react';
import '../styling/reset.css'
import '../styling/user_show.css'
import ServiceIndexItem from './service_index_item';
import ProductIndexItem from './product_index_item';
import Geocode from "react-geocode";
const key = require("../../config/keys").googleMapsKey;


class userShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: this.props.user.email,
            username: this.props.user.username,
            address: this.props.user.address,
            coordsLat: this.props.user.coordsLat,
            coordsLng: this.props.user.coordsLng,
            userShow: 'show'
        }
        this.handleUserSubmit = this.handleUserSubmit.bind(this)
    }

    componentDidMount() {
        this.props.getServices();
        this.props.getProducts();
        this.props.getUser(this.props.user.id);
    }

    async getGeo(address) {
        Geocode.setApiKey(key);
        Geocode.setLanguage("en");
        Geocode.setRegion("us");
        Geocode.setLocationType("APPROXIMATE");

        let lat = 0;
        let lng = 0;

        await Geocode.fromAddress(address).then(res => {
            lat = res.results[0].geometry.location.lat
            lng = res.results[0].geometry.location.lng
            this.setState({ coordsLat: lat, coordsLng: lng })
        })
    }

    updateField(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    async handleUserSubmit(e) {
        e.preventDefault()
        if (this.props.address !== this.state.address) {
            await this.getGeo(this.state.address)
        }
        this.props.updateUser({
            id: this.props.user._id,
            username: this.state.username,
            email: this.state.email,
            coordsLat: this.state.coordsLat,
            coordsLng: this.state.coordsLng,
            address: this.state.address
        })
    }

    render() {
        if (!this.props.user || Object.values(this.props.products).length === 0 || Object.values(this.props.services).length === 0) {
            return null
        };
        let { services, products } = this.props.user;
        let servicesMap = []
        if (services.length > 0) {
            servicesMap = services.map(serviceId => {
                if (this.props.services[serviceId]) {
                    return < ServiceIndexItem
                        key={services.serviceId}
                        picture={this.props.services[serviceId].picture}
                        name={this.props.services[serviceId].name}
                        category={this.props.services[serviceId].category}
                        rate={this.props.services[serviceId].rate}
                        rateIncrement={this.props.services[serviceId].rateIncrement}
                        description={this.props.services[serviceId].description}
                        address={this.props.services[serviceId].address}
                    />
                }
            })
        };
        let productsMap = []
        if (products.length > 0) {
            productsMap = products.map(productId => {
                if (this.props.products[productId]) {
                    return < ProductIndexItem
                        key={products.productId}
                        picture={this.props.products[productId].picture}
                        name={this.props.products[productId].name}
                        category={this.props.products[productId].category}
                        rate={this.props.products[productId].rate}
                        description={this.props.products[productId].description}
                        address={this.props.products[productId].address}
                    />
                }
            })
        }
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
                        {this.state.userShow === 'show' ?
                            <div>
                                <h3>View Profile: {this.props.user.username}</h3>
                                <p>Username: {this.props.user.username}</p>
                                <p>Email: {this.props.user.email}</p>
                                <p>Address: {this.props.user.address}</p>
                                <button onClick={() => this.setState({ userShow: 'edit' })}>Edit Profile</button>
                            </div>
                            :
                            <div>
                                <h3>Edit Profile: {this.props.user.username}</h3>
                                <form onSubmit={(e) => this.handleUserSubmit(e)}>
                                    <label >Username:
                                        <input type="text" onChange={this.updateField('username')} value={this.state.username} />
                                    </label>
                                    <br />
                                    <label >Email:
                                        <input type="text" onChange={this.updateField('email')} value={this.state.email} />
                                    </label>
                                    <br />
                                    <label >Address:
                                        <input type="text" onChange={this.updateField('address')} value={this.state.address} />
                                    </label>
                                    <br />
                                    <button type="submit" >Update Profile</button>
                                    <br />
                                    <button onClick={() => this.setState({ userShow: 'show' })} >Discard Changes</button>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default userShow;