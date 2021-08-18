import React from 'react'
import SimpleMap from '../map/map'

class IndexComponent extends React.Component {
    constructor(props) {
        super(props)
    }




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