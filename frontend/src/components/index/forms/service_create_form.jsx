import React from "react";
import { Redirect } from "react-router";

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
            this.props.createService(formData).then(res => this.props.history.push(`/service/${res.id}`));
        }
    }


    handleCancel(e) {
        this.setState({ selectForm: 0 })
    }


    render() {

        const PreviewService = this.state.serviceUrl ? <img className="upload-form-preview" src={this.state.serviceUrl} /> : null;


        if (this.state.selectForm === 0) {
            return (
                <div className="upload-container">

                    <div className="product-or-service">
                        <h2>Are you adding a service or a service?</h2>

                        <Link className="link-to" to="/products/new">Product</Link> or 
                        <Link className="link-to" to="/services/new">Service</Link>

                    </div>

                    <h1>Upload your service here</h1>
                    <div className="upload-form">
                        <h3>Upload your service here</h3>
                        <input type="file" onChange={this.handleFile} id="file" />
                        <div className="requirements">
                            <h2>Service Requirements</h2>
                            <p>
                                Thank you for uploading your service!
                                <br />
                                Please tell us a little bit about your service:
                                <br />
                            </p>
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
                            <h2>Upload Pictures of your service/ work below:</h2>
                            <input type="file" onChange={this.handleFile} style={{ display: "none" }} />
                        </label>
                        <div className="upload-form-preview">
                            {PreviewService}
                        </div>
                    </div>

                    <form className="upload-form" onSubmit={this.handleSubmit}>
                        <h3> Tell us more about your service: </h3>
                        <label>Name:
                            <input className="product-or-service-inputs" type="text" value={this.state.name} onChange={this.update("name")} />
                            {this.state.tError ? <p className="errors">Name can not be empty</p> : null}
                        </label> <br />

                        <label>Category:
                            <input className="product-or-service-inputs" type="text" value={this.state.category} onChange={this.update("category")} />
                            {this.state.tError ? <p className="errors">Category can not be empty</p> : null}
                        </label> <br />

                        <label>Rate:
                            <input className="product-or-service-inputs" type="text" value={this.state.rate} onChange={this.update("rate")} />
                            {this.state.tError ? <p className="errors">Rate can not be empty</p> : null}
                        </label> <br />

                        <label>Rate Increment:
                            <input className="product-or-service-inputs" type="text" value={this.state.rateIncrement} onChange={this.update("rateIncrement")} />
                            {this.state.tError ? <p className="errors">Rate Increment can not be empty</p> : null}
                        </label> <br />

                        <label>Address:
                            <input className="product-or-service-inputs" type="text" value={this.state.address} onChange={this.update("address")} />
                            {this.state.tError ? <p className="errors">Address can not be empty</p> : null}
                        </label> <br />

                        <label>Description:
                            <textarea cols="40" rows="6" className="product-or-service-inputs" type="text" value={this.state.description} onChange={this.update("description")} />
                        </label> <br />
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