import React from "react";

class ProductIndexItem extends React.Component {

    render() {
        console.log(this.props)
        const {name, category, rate, description, address, picture} = this.props; 
        return (
            <div className="service-index-item">
                <img className="upload-form-preview" src={picture} alt="Product preview"></img>
                <p>Name: {name}</p>
                <p>Category: {category}</p>
                <p>Rate: {rate}</p>
                <p>Description: {description}</p>
                <p>Address: {address}</p>
                {this.props.user._id && this.props.user._id === this.props.owner ?
                    <div>
                        <button onClick={() => this.props.deleteProduct(this.props.id) }>Remove Listing</button>
                    </div>
                : 
                    ''
                }
            </div> 
        )
    }
}

export default ProductIndexItem; 