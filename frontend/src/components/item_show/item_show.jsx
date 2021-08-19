import React from 'react';
import '../styling/reset.css'

class ItemShow extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        console.log(this.props.history)
        // if ( logic to trigger correct thunk action ) {
        //     this.props.getProduct(this.props.itemId)
        // } else {
        //     this.props.getService(this.props.itemId)
        // }
    }

    render() {
        return (
            <div>
                {/* <p>{this.props.item.id}</p> */}
            </div>
        )
    }
}

export default ItemShow;