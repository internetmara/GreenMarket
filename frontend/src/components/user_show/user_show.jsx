import React from 'react';
import '../styling/reset.css'
import '../styling/user_show.css'
import ServiceIndexItem from '../index/forms/service_index_item';

class userShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getServices();
    }

    render() {
        console.log(this.props)

        if (!this.props.services) {
            return null; 
        } 
        let { services } = this.props.user.services;
        console.log('hello');
        console.log(services)

        return (
            <div className="users-show-container">
                <h1 className="users-show-header">This is the show page</h1>
                { services.map (service => (
                    < ServiceIndexItem
                        name = { service.name }
                        category = { service.category }
                        rate = { service.rate }
                        rateIncrement = { service.rateIncrement }
                        description = { service.description }
                        address = { service.address }
                    /> 
                )) }
            </div>
        )
    }
}

export default userShow;