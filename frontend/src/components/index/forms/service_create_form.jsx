import React from "react";
// import { Link } from "react-router-dom";
import '../../styling/forms.css'
import '../../styling/reset.css'
import Geocode from "react-geocode";
const key = require("../../../config/keys").googleMapsKey;

class UploadService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            category: "",
            rate: "",
            rateIncrement: "",
            description: "",
            address: "",
            coordsLat: 0,
            coordsLng: 0,
            user: this.props.user,
            service: [],
            redirect: false,
            serviceFile: null,
            serviceUrl: null,
            tError: false,
            selectForm: 0,
            badAddress: 'n'
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
    };

    handleFile(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ serviceFile: file, serviceUrl: fileReader.result, selectForm: 1 });
        }

        if (file && file.size < 60000) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
            alert("File is too big! Image must be no bigger than 60kb")
        }
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

    async handleSubmit(e) {
        e.preventDefault();
        if (!this.state.address) {
            return (this.setState({["submissionErr"]: "Please fill out the entire form!"}))
        }

        this.setState({ badAddress: 'n' })
        await this.getGeo(this.state.address).catch(res => {
            this.setState({ badAddress: 'y' })
        })
        if (this.state.badAddress === 'y') {
            return (this.setState({ ["submissionErr"]: "Invalid Address" }))
        }
        if (this.state.tError === false) {
            const formData = {};
            formData.picture = this.state.serviceUrl
            formData.name = this.state.name
            formData.category = this.state.category
            formData.rate = this.state.rate
            formData.rateIncrement = this.state.rateIncrement
            formData.description = this.state.description
            formData.address = this.state.address
            formData.coordsLat = this.state.coordsLat
            formData.coordsLng = this.state.coordsLng
            formData.user = this.state.user
            formData.service = this.state.service
            if (!formData.picture) {
                this.setState({["submissionErr"]: "Please add a picture!"})
            } else if (!formData.name) {
                this.setState({["submissionErr"]: "Name cannot be blank!"})
            } else if (!formData.category) {
                this.setState({["submissionErr"]: "Please select a category!"})
            } else if (!formData.rate) {
                this.setState({["submissionErr"]: "Please add a rate!"})
            } else if (!formData.rate) {
                this.setState({["submissionErr"]: "Please add a rate increment!"})
            } else if (!formData.description) {
                this.setState({["submissionErr"]: "Description cannot be blank!"})
            } else if (!formData.address || !formData.coordsLat || !formData.coordsLng) {
                this.setState({["submissionErr"]: "Address is invalid!"})
            } else if (!formData.user) {
                this.setState({["submissionErr"]: "User is invalid!"})
            } else if (!formData.service) {
                this.setState({["submissionErr"]: "Service is invalid!"})
            } else {
                await this.props.addService(formData)
                this.props.history.push("/user")
            }
        }
    }

    handleCancel(e) {
        this.setState({ selectForm: 0 })
    }

    render() {

        const PreviewService = this.state.serviceUrl ? <img className="upload-form-preview" alt="upload-preview" src={this.state.serviceUrl} /> : null;

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
                            {PreviewService}
                        </div>
                    </div>

                    <form className="upload-form" onSubmit={this.handleSubmit}>
                        <h3> Tell us more about your service: </h3>
                        <input className="product-or-service-inputs" type="text" placeholder="Name:" value={this.state.name} onChange={this.update("name")} />
                        {this.state.tError ? <p className="errors">Name can not be empty</p> : null}
                        <label className="product-or-service-inputs" onChange={this.update("category")}>Category:&nbsp;
                        <select>
                            <option></option>
                            <option>Crafts</option>
                            <option>Tech Support</option>
                            <option>Caregiving</option>
                            <option>Home Improvement</option>
                            <option>Misc</option>
                        </select>
                        {this.state.tError ? <p className="errors">Category can not be empty</p> : null}
                        </label>
                        <input className="product-or-service-inputs" placeholder="Rate:" type="text" value={this.state.rate} onChange={this.update("rate")} />
                        {this.state.tError ? <p className="errors">Rate can not be empty</p> : null}
                        <label className="product-or-service-inputs" onChange={this.update("rateIncrement")}>Per:&nbsp;
                        <select>
                            <option></option>
                            <option>Minute</option>
                            <option>Hour</option>
                            <option>Day</option>
                            <option>Month</option>
                            <option>Unit</option>
                        </select>
                        </label>
                        {this.state.tError ? <p className="errors">Rate Increment can not be empty</p> : null}
                        <input placeholder="Address:" className="product-or-service-inputs" type="text" value={this.state.address} onChange={this.update("address")} />
                        {this.state.tError ? <p className="errors">Address can not be empty</p> : null}
                        <textarea placeholder="Description:" cols="40" rows="6" className="product-or-service-inputs" type="text" value={this.state.description} onChange={this.update("description")} />
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

export default UploadService;