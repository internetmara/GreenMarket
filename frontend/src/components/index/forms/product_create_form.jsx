import React from "react";
// import { Link } from "react-router-dom";
import '../../styling/forms.css'
import '../../styling/reset.css'
import Geocode from "react-geocode";
const key = require("../../../config/keys").googleMapsKey;

class UploadProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            category: "",
            rate: "",
            description: "",
            address: "",
            coordsLat: 0,
            coordsLng: 0,
            user: this.props.user,
            product: [],
            redirect: false,
            productFile: null,
            productUrl: null,
            tError: false,
            selectForm: 0,
            formSuccess: null,
            badAddress: 'n',
            submitted: 'n'
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    checkErrors() {
        if (this.state && this.state.submissionErr) {
            return (<h1 className="submission-err">{this.state.submissionErr}</h1>)
        } else {
            return null
        };
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

    async getGeo(address) {
        Geocode.setApiKey(key);
        Geocode.setLanguage("en");
        Geocode.setRegion("us");
        Geocode.setLocationType("APPROXIMATE");

        let lat = 0;
        let lng = 0;

        await Geocode.fromAddress(address).then( res => {
            lat = res.results[0].geometry.location.lat
            lng = res.results[0].geometry.location.lng
            this.setState({ coordsLat: lat, coordsLng: lng})
        })
    }

    async handleSubmit(e) {
        console.log('submit log 1')
        if (this.state.submitted === 'y') return null;
        e.preventDefault();
        if (!this.state.address) {
            return (this.setState({ ["submissionErr"]: "Please fill out the entire form!", submitted: 'n'}))
        }

        this.setState({ badAddress: 'n', submitted: 'y' })
        await this.getGeo(this.state.address).catch(res => {
            this.setState({ badAddress: 'y' })
        })
        if (this.state.badAddress === 'y') {
            return (this.setState({ ["submissionErr"]: "Invalid Address", submitted: 'n' }))
        }
        if (this.state.tError === false) {
            console.log('submit log 2')
            
            const formData = {};
            formData.picture = this.state.productUrl
            formData.name = this.state.name
            formData.category = this.state.category
            formData.rate = this.state.rate
            formData.description = this.state.description
            formData.address = this.state.address
            formData.coordsLat = this.state.coordsLat
            formData.coordsLng = this.state.coordsLng
            formData.user = this.state.user
            formData.product = this.state.product

            if (!formData.picture) {
                console.log('picture fail')
                this.setState({ ["submissionErr"]: "Please add a picture!", submitted: 'n'})
            } else if (!formData.name) {
                console.log('name fail')
                this.setState({ ["submissionErr"]: "Name cannot be blank!", submitted: 'n'})
            } else if (!formData.category) {
                console.log('category fail')
                this.setState({ ["submissionErr"]: "Please select a category!", submitted: 'n'})
            } else if (!formData.rate) {
                console.log('rate fail')
                this.setState({ ["submissionErr"]: "Please add a rate!", submitted: 'n'})
            } else if (!formData.description) {
                console.log('description fail')
                this.setState({ ["submissionErr"]: "Description cannot be blank!", submitted: 'n'})
            } else if (!formData.address || !formData.coordsLat || !formData.coordsLng) {
                console.log('address fail')
                this.setState({ ["submissionErr"]: "Address is invalid!", submitted: 'n'})
            } else if (!formData.user) {
                console.log('user fail')
                this.setState({ ["submissionErr"]: "User is invalid!", submitted: 'n'})
            } else if (!formData.product) {
                console.log('product fail')
                this.setState({ ["submissionErr"]: "Product is invalid!", submitted: 'n'})
            } else {
                console.log(formData)
                this.props.addProduct(formData)
                // await this.props.addProduct(formData)
                    .then(() => {
                        console.log('success submit log')
                        this.props.history.push("/user")
                    })
            }
        }
    }

    handleCancel(e) {
        this.setState({ selectForm: 0 })
    }

    render() {
        
        const PreviewProduct = this.state.productUrl ? <img className="upload-form-preview" alt="upload-preview" src={this.state.productUrl} /> : null;

        if (this.state.selectForm === 0) {
            return (
                <div className="upload-container">
                    <h1 className="upload-header">Upload a {this.props.formType}</h1>
                    
                    <div className="upload-form">
                        <div className="photo-submit">
                            <input className="photo-input" type="file" onChange={this.handleFile} id="file" />
                        </div>
                        
                        <div className="product-or-service-links">
                            <h6 className="photo-size-message">Image must be no bigger than 60kb</h6>
                            <h3 className="change-form">...or upload a&nbsp;<u className="navlink">{this.props.navLink}</u>&nbsp;instead!</h3>
                        </div>
                    </div>
                </div>
            )
        } 

        if (this.state.selectForm === 1) {
            return (

                <div className="uploaded-container-two">
                    <div>{this.checkErrors()}</div>
                    <div className="upload-button-box">
                        <label id="uploading-here">
                            <input type="file" onChange={this.handleFile} style={{ display: "none" }} />
                        </label>
                        <br/>
                        <h6 className="photo-size-message">Image must be no bigger than 60kb</h6>
                        <div className="upload-form-preview-img">
                            {PreviewProduct}
                        </div>
                    </div>

                    <form className="upload-form" onSubmit={this.handleSubmit}>
                        <h3> Tell us more about your product: </h3>
                            <input className="product-or-service-inputs" placeholder="Name" type="text" value={this.state.name} onChange={this.update("name")} />
                            {this.state.tError ? <p className="errors">Name can not be empty</p> : null}
                                <label className="product-or-service-inputs" onChange={this.update("category")}>Category:&nbsp;
                                    <select>
                                        <option></option>
                                        <option>Food</option>
                                        <option>Clothing</option>
                                        <option>Housing</option>
                                        <option>Misc</option>
                                    </select>
                                </label>
                            {this.state.tError ? <p className="errors">Category can not be empty</p> : null}
                            <input className="product-or-service-inputs" placeholder="Rate:" type="text" value={this.state.rate} onChange={this.update("rate")} />
                            {this.state.tError ? <p className="errors">Rate can not be empty</p> : null}
                            <input className="product-or-service-inputs" type="text" placeholder="Address:" value={this.state.address} onChange={this.update("address")} />
                            {this.state.tError ? <p className="errors">Address can not be empty</p> : null}
                            <textarea cols="40" rows="6" className="product-input" placeholder="Description:" type="text" value={this.state.description} onChange={this.update("description")} />
                        
                        <div className="form-buttons-box">
                            <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>
                            <button className="upload-button" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            )
        } 
    }
    
}
        

export default UploadProduct;