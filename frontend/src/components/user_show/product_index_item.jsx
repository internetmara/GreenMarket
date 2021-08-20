import React from "react";

class ProductIndexItem extends React.Component {



    render() {
        const {name, category, rate, description, address} = this.props; 
        
        return (
            <div className="service-index-item">
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