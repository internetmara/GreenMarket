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
                    {/* {console.log(this.props.products[item._id])} */}
                    {
                        this.props.products[item._id] !== undefined ? 
                        <Link to={`/product/${item._id}`} ><p>{item.name}</p></Link> :
                        <Link to={`/service/${item._id}`} ><p>{item.name}</p></Link>
                    }
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