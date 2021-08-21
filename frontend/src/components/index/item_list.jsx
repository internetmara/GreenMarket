import React from 'react';

class ItemList extends React.Component {
    constructor(props) {
        super(props)
    }

    listAllItems() {
        let items = Object.values(this.props.products).concat(Object.values(this.props.services))
        // console.log(items.length)
        if (items.length === 0) return null;
        return items.map( item => {
            return <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
            </div>
        })

    }

    render() {
        
        return (
            <div>
                <h2>ITEMSLZT</h2>
                {this.listAllItems()}
            </div>
        )
    }
}

export default ItemList;