import React from "react";
import { Link } from "react-router-dom";
import '../../styling/forms.css'
import '../../styling/reset.css'

class UploadProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            category: "",
            rate: "",
            description: "",
            address: "",
            user: this.props.user,
            product: [],
            redirect: false,
            productFile: null,
            productUrl: null,
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
            this.setState({ productFile: file, productUrl: fileReader.result, selectForm: 1 });
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
            formData.append('product[name]', this.state.name)
            formData.append('product[category]', this.state.category)
            formData.append('product[rate]', this.state.rate)
            formData.append('product[description]', this.state.description)
            formData.append('product[address]', this.state.address)
            formData.append('product[user]', this.state.user)
            formData.append('product[product]', this.state.productFile)
            this.props.getProduct(formData).then(res => this.props.history.push(`/products/${res.id}`));
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
                    <h1 className="upload-header">Upload Form</h1>
                    <div className="product-or-service">
                        <div className="product-or-service-links">
                            <Link className="link-to" to="/products/new">Product</Link>
                            &nbsp;or&nbsp; 
                            <Link className="link-to" to="/services/new">Service</Link>
                        </div>
                    </div> 
                    <div className="upload-form">
                        <h3>Upload your product here</h3>
                        <div className="photo-submit"><input className="photo-input" type="file" onChange={this.handleFile} id="file" /></div>
                        <div className="requirements">
                            <h2 className="product-requirements">Product Requirements</h2>
                            <p className="uploading-thanks">
                              Thank you for uploading your product!
                              <br/>
                              Please tell us a little bit about your product: 
                              <br/> 
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
                            <h2>Upload Pictures of your product below:</h2>
                            <input type="file" onChange={this.handleFile} style={{ display: "none" }} />
                        </label>
                        <div className="upload-form-preview">
                            {PreviewProduct}
                        </div>
                    </div>

                    <form className="upload-form" onSubmit={this.handleSubmit}>
                        <h3> Tell us more about your product: </h3>
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

                            <label>Address:
                                <input className="product-or-service-inputs" type="text" value={this.state.address} onChange={this.update("address")} />
                                {this.state.tError ? <p className="errors">Address can not be empty</p> : null}
                            </label> <br />

                            <label>Description:
                                <textarea cols="40" rows="6" className="product-input" type="text" value={this.state.description} onChange={this.update("description")} />
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

export default UploadProduct;