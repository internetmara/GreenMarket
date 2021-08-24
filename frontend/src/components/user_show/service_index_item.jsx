import React from "react";

class ServiceIndexItem extends React.Component {


    render() {
        const {name, category, rate, rateIncrement, description, address} = this.props; 
        
        return (
            <div className="service-index-item">
                {/* <img className="upload-form-preview" src={picture}></img> */}
                <p>Name: {name}</p>
                <p>Category: {category}</p>
                <p>Rate: {rate}</p>
                <p>Per: {rateIncrement}</p>
                <p>Description: {description}</p>
                <p>Address: {address}</p>
            </div> 
        )

    }
}

export default ServiceIndexItem; 