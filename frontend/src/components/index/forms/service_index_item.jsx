import React from "react";

class ServiceIndexItem extends React.Component {



    render() {
        const {name, category, rate, rateIncrement, description, address} = this.props; 
        
        return (
            <div>
                <p>{name}</p>
                <p>{category}</p>
                <p>{rate}</p>
                <p>{rateIncrement}</p>
                <p>{description}</p>
                <p>{address}</p>
            </div> 
        )

    }
}

export default ServiceIndexItem; 