import React from "react";
// import { Link } from "react-router-dom";
import '../../styling/forms.css'
import '../../styling/reset.css'

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
            user: this.props.user,
            service: [],
            redirect: false,
            serviceFile: null,
            serviceUrl: null,
            tError: false,
            selectForm: 0,
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    // componentDidMount() {
    //     this.props.getProducts();
    //     this.props.getServices();
    // }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleFile(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ serviceFile: file, serviceUrl: fileReader.result, selectForm: 1 });
        }

        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.tError === false) {
            const formData = new FormData();
            formData.append('service[name]', this.state.name)
            formData.append('service[category]', this.state.category)
            formData.append('service[rate]', this.state.rate)
            formData.append('service[rateIncrement]', this.state.rateIncrement)
            formData.append('service[description]', this.state.description)
            formData.append('service[address]', this.state.address)
            formData.append('service[user]', this.state.user)
            formData.append('service[service]', this.state.serviceFile)
            this.props.addService(formData)
            // this.props.addService(formData).then(res => this.props.history.push(`/service/${res.id}`));
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
                            <h3 className="change-form">...or upload a&nbsp;<u className="navlink">{this.props.navLink}</u>&nbsp;instead!</h3>
                        </div>
                    </div>
                </div>
            )
        }


        if (this.state.selectForm > 1) {
            return (

                <div className="uploaded-container-two">
                    <div className="upload-button-box">
                        <label id="uploading-here">
                            <input type="file" onChange={this.handleFile} style={{ display: "none" }} />
                        </label>
                        <div className="upload-form-preview">
                            {PreviewService}
                        </div>
                    </div>

                    <form className="upload-form" onSubmit={this.handleSubmit}>
                        <h3> Tell us more about your service: </h3>
                        <input className="product-or-service-inputs" type="text" placeholder="Name" value={this.state.name} onChange={this.update("name")} />
                        {this.state.tError ? <p className="errors">Name can not be empty</p> : null}
                        <input className="product-or-service-inputs" placeholder="Category:" type="text" value={this.state.category} onChange={this.update("category")} />
                        {this.state.tError ? <p className="errors">Category can not be empty</p> : null}
                        <input className="product-or-service-inputs" placeholder="Rate:" type="text" value={this.state.rate} onChange={this.update("rate")} />
                        {this.state.tError ? <p className="errors">Rate can not be empty</p> : null}
                        <input className="product-or-service-inputs" placeholder="Rate Increment:" type="text" value={this.state.rateIncrement} onChange={this.update("rateIncrement")} />
                        {this.state.tError ? <p className="errors">Rate Increment can not be empty</p> : null}
                        <input placeholder="Address:" className="product-or-service-inputs" type="text" value={this.state.address} onChange={this.update("address")} />
                        {this.state.tError ? <p className="errors">Address can not be empty</p> : null}
                        <textarea placeholder="Address:" cols="40" rows="6" className="product-or-service-inputs" type="text" value={this.state.description} onChange={this.update("description")} />
                        <div>
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