import React from "react";
import { Redirect } from "react-router";

class UploadProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            address: "",
            email: "",
            avatar: "",
            products: [],
            services: [],
            // user: this.props.currentUser ??
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
            formData.append('product[category]', this.state.category)
            formData.append('product[subCategory]', this.state.subCategory)
            formData.append('product[rate]', this.state.rate)
            formData.append('product[description]', this.state.description)
            formData.append('product[address]', this.state.address)
            formData.append('product[product]', this.state.productFile)
            this.props.createProduct(formData).then(res => this.props.history.push(`/products/${res.id}`));
        }
    }


    handleCancel(e) {
        this.setState({ selectForm: 0 })
    }


    render() {

        const PreviewProduct = this.state.productUrl ? <img className="upload-form-preview" src={this.state.productUrl} /> : null;


        if (this.state.selectForm === 0) {
            return (
                <div className="upload-product-container">
                    <h1>Up</h1>
                    <div className="upload-form">
                        <h3>Upload your product here</h3>
                        <input type="file" onChange={this.handleFile} id="file" />
                        <div className="requirements">
                            <h2>Product Requirements</h2>
                            <p>
                                ~product requirements will go here~
                            </p>
                        </div>
                    </div>
                </div>
            )
        }


        if (this.state.selectForm > 1) {
            return (

                <div className="uploaded-container-product">
                    <div className="upload-button-box">
                        <label id="uploading-here">
                            <h2>Upload Pictures of your product below:</h2>
                            <input type="file" onChange={this.handleFile} style={{ display: "none" }} />
                        </label>
                        <div className="upload-form-preview-product">
                            {PreviewProduct}
                        </div>
                    </div>

                    <form className="upload-form" onSubmit={this.handleSubmit}>
                        <h3> Tell us more about your product: </h3>
                        <label>Category:
                            <input className="category" type="text" value={this.state.category} onChange={this.update("category")} />
                            {this.state.tError ? <p className="errors">Category can not be empty</p> : null}
                        </label> <br />
                        <label>Description:
                            <textarea cols="40" rows="6" className="description" type="text" value={this.state.description} onChange={this.update("description")} />
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