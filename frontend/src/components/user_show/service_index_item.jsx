import React from "react";
import Geocode from "react-geocode";
const key = require("../../config/keys").googleMapsKey;

class ServiceIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            category: this.props.category,
            rate: this.props.rate,
            rateIncrement: this.props.rateIncrement,
            description: this.props.description,
            coordsLat: this.props.coordsLat,
            coordsLng: this.props.coordsLng,
            picture: this.props.picture,
            address: this.props.address,
            showUpdateForm: 'n',
            badAddress: 'n',
            productFile: null,
            productUrl: null,
            selectForm: 0
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleItemSubmit = this.handleItemSubmit.bind(this);
    }

    updateField(field) {
        return (e) => this.setState({ [field]: e.target.value })
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

    handleFile(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ productFile: file, productUrl: fileReader.result, selectForm: 1 });
        }

        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    async handleItemSubmit(e) {
        this.setState({ badAddress: 'n', showUpdateForm: 'n' })
        e.preventDefault()
        if (this.props.address !== this.state.address) {
            await this.getGeo(this.state.address).catch(res => {
                this.setState({ badAddress: 'y' })
            })
        }
        if (this.state.badAddress === 'y') return null;
        console.log(this.state)
        this.props.updateService({
            id: this.props.id,
            name: this.state.name,
            category: this.state.category,
            rate: this.state.rate,
            rateIncrement: this.state.rateIncrement,
            description: this.state.description,
            coordsLat: this.state.coordsLat,
            coordsLng: this.state.coordsLng,
            picture: this.state.productUrl === null ? this.props.picture : this.state.productUrl,
            address: this.state.address
        })
    }

    render() {
        const {name, category, rate, rateIncrement, description, address, picture} = this.props; 
        
        return (
            this.state.showUpdateForm === 'n' ?
                <div className="service-index-item">
                    <div className="form-pic">
                        <img className="upload-form-preview" src={picture} alt="Service preview"/>
                    </div>
                    <p>Name: {name}</p>
                    <p>Category: {category}</p>
                    <p>Rate: {rate}</p>
                    <p>Per: {rateIncrement}</p>
                    <p>Description: {description}</p>
                    <p>Address: {address}</p>
                    {this.props.user._id && this.props.user._id === this.props.owner ?
                        <div>
                            <button className="remove-listing" onClick={() => this.props.deleteService(this.props.id)}>Remove Listing</button>
                            <button className="update-listing" onClick={() => this.setState({ showUpdateForm: 'y' })}>Update Listing</button>
                        </div>
                        :
                        ''
                    }
                </div> 
            :
                <div className="update-form-container">
                        <form onSubmit={(e) => this.handleItemSubmit(e)}>
                                <label>Name:&nbsp;
                                    <input type="text" onChange={this.updateField('name')} value={this.state.name} />
                                </label>
                                <label onChange={this.updateField("category")}>Category:&nbsp;
                                    <select>
                                        <option></option>
                                        <option>Food</option>
                                        <option>Clothing</option>
                                        <option>Housing</option>
                                        <option>Misc</option>
                                    </select>
                                </label>
                                <label>Rate:&nbsp;
                                    <input type="text" onChange={this.updateField('rate')} value={this.state.rate} />
                                </label>
                                <label onChange={this.updateField("rateIncrement")}>Per:&nbsp;
                                    <select>
                                        <option></option>
                                        <option>Minute</option>
                                        <option>Hour</option>
                                        <option>Day</option>
                                        <option>Month</option>
                                        <option>Unit</option>
                                    </select>
                                </label>
                                <label >Description:&nbsp;
                                    <input type="text" onChange={this.updateField('description')} value={this.state.description} />
                                </label>
                                <label >Address:&nbsp;
                                    <input type="text" onChange={this.updateField('address')} value={this.state.address} />
                                </label>
                                <div className="upload-button-box">
                                    <label id="uploading-here">
                                        <input type="file" onChange={this.handleFile} />
                                    </label>
                                </div>
                        <div className="update-button-box">
                            <button className="update-listing" type="submit">Update Listing</button>
                            <button className="update-listing" onClick={() => this.setState({ showUpdateForm: 'n' })}>View Listing</button>
                        </div>
                    </form>
                </div>
        )

    }
}

export default ServiceIndexItem; 