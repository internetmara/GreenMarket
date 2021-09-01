import React from "react";
import Geocode from "react-geocode";
const key = require("../../config/keys").googleMapsKey;

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            category: this.props.category,
            rate: this.props.rate,
            description: this.props.description,
            coordsLat: this.props.coordsLat,
            coordsLng: this.props.coordsLng,
            picture: this.props.picture,
            address: this.props.address,
            showUpdateForm: 'n',
            badAddress: 'n',
            productFile: null,
            productUrl: null
        }
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
        // debugger
        fileReader.onloadend = () => {
            console.log(fileReader)
            this.setState({ productUrl: fileReader.result});
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
        this.props.updateProduct({
            id: this.props.id,
            name: this.state.name,
            category: this.state.category,
            rate: this.state.rate,
            description: this.state.description,
            coordsLat: this.state.coordsLat,
            coordsLng: this.state.coordsLng,
            picture: this.state.productUrl === null ? this.props.picture : this.state.productUrl ,
            address: this.state.address
        })
    }

    render() {
        const {name, category, rate, description, address, picture} = this.props; 

        return (
            this.state.showUpdateForm === 'n' ?
               <div className="service-index-item">
                    <img className="upload-form-preview" src={picture} alt="Product preview"></img>
                    <p>Name: {name}</p>
                    <p>Category: {category}</p>
                    <p>Rate: {rate}</p>
                    <p>Description: {description}</p>
                    <p>Address: {address}</p>
                    { this.props.user._id && this.props.user._id === this.props.owner ?
                        <div>
                        <button onClick={() => this.props.deleteProduct(this.props.id) }>Remove Listing</button>
                        <button onClick={() => this.setState({ showUpdateForm: 'y' })}>Update Listing</button>
                        </div>
                        : 
                        ''
                    }
                </div> 
            :
                <div className="service-index-item">
                    <form onSubmit={(e) => this.handleItemSubmit(e)}>
                        <label >Name:
                            <input type="text" onChange={this.updateField('name')} value={this.state.name} />
                        </label>
                        <br />
                            <label className="product-or-service-inputs" onChange={this.updateField("category")}>Category:&nbsp;
                            <select>
                                <option></option>
                                <option>Food</option>
                                <option>Clothing</option>
                                <option>Housing</option>
                                <option>Misc</option>
                            </select>
                        </label>
                        <br />
                        <label >Rate:
                            <input type="text" onChange={this.updateField('rate')} value={this.state.rate} />
                        </label>
                        <br />
                        <label >Description:
                            <input type="text" onChange={this.updateField('description')} value={this.state.description} />
                        </label>
                        <br />
                        <label >Address:
                            <input type="text" onChange={this.updateField('address')} value={this.state.address} />
                        </label>
                        <br />
                        <div className="upload-button-box">
                            <label id="uploading-here">
                                <input type="file" onChange={this.handleFile} />
                            </label>
                        </div>
                        <button type="submit">Update Listing</button>
                    </form>
                    <button onClick={() => this.setState({ showUpdateForm: 'n' })}>View Listing</button>
                </div>
        )
    }
}

export default ProductIndexItem; 