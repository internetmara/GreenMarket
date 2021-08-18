import React from 'react'
import SimpleMap from '../map/map'

class IndexComponent extends React.Component {
    constructor(props) {
        super(props)
    }

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

    readItems() {
        // this might need to be moved to the map component and products/services passed as props
        let items = Object.values(this.props.products).concat(Object.values(this.props.services))
        items.forEach( item => {
            // individual item here - will throw this into a map component item
        })

    }

    render() {
        return (
            <div>
                <h2>Index Component</h2>
                
                {this.readItems()}
                {/* <SimpleMap /> */}
                {/* {need to nest individual items underneath the logged in user} */}
                
            </div>
        )
    }
}

export default IndexComponent;