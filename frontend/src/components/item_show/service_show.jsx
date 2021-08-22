import React from "react";
import '../styling/itemshow.css'

class ServiceIndexItem extends React.Component {


    componentDidMount() {
        this.props.getServices()
    }

    render() {
        if (this.props.service === undefined) return null
        const { name, category, rate, rateIncrement, description, address } = this.props.service;

        return (
            <div className="item-show-root">
                <h3>I'm a Service</h3>
                {/* <img src="{}"></img> */}
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