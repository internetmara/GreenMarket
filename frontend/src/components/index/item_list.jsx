import React from 'react';
import { Link } from 'react-router-dom'

class ItemList extends React.Component {
    constructor(props) {
        super(props)
    }

    listAllItems() {
        let items = Object.values(this.props.products).concat(Object.values(this.props.services))
        // console.log(items.length)
        if (items.length === 0) return null;
        return items.map( item => {
         return <div key={item._id} className="item">
                    <Link><p to="" >{item.name}</p></Link>
                    <p>{item.category}</p>
                    <p>{item.rate}</p>
                </div>
        })

    }

    render() {
        
        return (
            <div>
                <h2>ITEMSLZT</h2>
                <div className="items-index">
                    {this.listAllItems()}
                </div>
            </div>
        )
    }
}

export default ItemList;