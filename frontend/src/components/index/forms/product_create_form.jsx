import React from "react";
// import { Link } from "react-router-dom";
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

            const formData = {};
            formData.name = this.state.name
            formData.category = this.state.category
            formData.rate = this.state.rate
            formData.description = this.state.description
            formData.address = this.state.address
            formData.user = this.state.user
            formData.product = this.state.product
            this.props.addProduct(formData)
            console.log(this.state.user)
            this.props.history.push(`/users/${this.state.user.id}`)
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
                            <h3 className="change-form">...or upload a&nbsp;<u className="navlink">{this.props.navLink}</u>&nbsp;instead!</h3>
                        </div>
                    </div>
                </div>
            )
        } 


        if (this.state.selectForm === 1) {
            return (

                <div className="uploaded-container-two">
                    <div className="upload-button-box">
                        <label id="uploading-here">
                            <input type="file" onChange={this.handleFile} style={{ display: "none" }} />
                        </label>
                        <div className="upload-form-preview">
                            {PreviewProduct}
                        </div>
                    </div>

                    <form className="upload-form" onSubmit={this.handleSubmit}>
                        <h3> Tell us more about your product: </h3>
                            <input className="product-or-service-inputs" placeholder="Name" type="text" value={this.state.name} onChange={this.update("name")} />
                            {this.state.tError ? <p className="errors">Name can not be empty</p> : null}
                            <input className="product-or-service-inputs" placeholder="Category:" type="text" value={this.state.category} onChange={this.update("category")} />
                            {this.state.tError ? <p className="errors">Category can not be empty</p> : null}
                            <input className="product-or-service-inputs" placeholder="Rate:" type="text" value={this.state.rate} onChange={this.update("rate")} />
                            {this.state.tError ? <p className="errors">Rate can not be empty</p> : null}
                            <input className="product-or-service-inputs" type="text" placeholder="Address:" value={this.state.address} onChange={this.update("address")} />
                            {this.state.tError ? <p className="errors">Address can not be empty</p> : null}
                            <textarea cols="40" rows="6" className="product-input" placeholder="Description:" type="text" value={this.state.description} onChange={this.update("description")} />
                            <div>
                            <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>
                            <button className="upload-button" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            )
        } else {
            // console.log('hay')
            return null;
        }
    
    }
        
}

export default UploadProduct;