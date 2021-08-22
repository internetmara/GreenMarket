import React from "react";

class ProductIndexItem extends React.Component {

    componentDidMount() {
        this.props.getProducts()
        // this.props.getProduct(this.props.match.params.itemId)
    }


    render() {
        if (this.props.product === undefined) return null
        const {name, category, rate, description, address} = this.props.product; 
        
        return (
            <div className="service-index-item">
                <h3>I'm a Product</h3>
                {/* <img src="{}"></img> */}
                <p>Name: {name}</p>
                <p>Category: {category}</p>
                <p>Rate: {rate}</p>
                <p>Description: {description}</p>
                <p>Address: {address}</p>
            </div> 
        )

    }
}

export default ProductIndexItem; 