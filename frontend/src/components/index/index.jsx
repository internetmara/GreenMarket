import React from 'react'
// import SimpleMap from '../map/map'

class IndexComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

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
                <h2>Index Component</h2>
                <button onClick={() => this.props.getServices()} >Services</button>
                <button onClick={() => this.props.getProducts()} >Products</button>
                {/* <SimpleMap /> */}
                {/* {need to nest individual items underneath the logged in user} */}
                
            </div>
        )
    }
}

export default IndexComponent;