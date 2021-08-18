import React from 'react'
import { Link } from 'react-router-dom'
import SimpleMap from '../map/map'

class IndexComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.getServices()
        this.props.getProducts()
    }

// ** need to **
// index all products and services
    // do this through simple get axios calls
// show each individual item
    // iterate through all items to get these && stored in frontend state
// show each individual item's seller
    // send a axios get request for product owner info - send product owner's id


    render() {
        return (
            <div>
                <Link to="/"><h2>Map Component</h2></Link>
                <SimpleMap products={this.props.products} services={this.props.services} />
            </div>
        )
    }
}

export default IndexComponent;