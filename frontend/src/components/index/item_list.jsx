import React from 'react';

class ItemList extends React.Component {

    showItem(id) {
        let el = document.getElementsByClassName(id)
        Object.values(el)[0].style.display = 'flex'
    }

    hideItem(id) {
        let el = document.getElementsByClassName(id)
        Object.values(el)[0].style.display = 'none'
    }

    listAllItems() {
        let items = Object.values(this.props.products).concat(Object.values(this.props.services))
        
        if (items.length === 0) return null;
        return items.map( item => {
                return <div key={item._id} className="item">
                    <p onClick={() => this.showItem(`item-show-${item._id}`)} >{item.name}</p>
                    <p>{item.category}</p>
                    <p>{item.rate}</p>
                        <div className={`item-show-${item._id}`} style={{ display: "none" }}>
                            <div className="item-show-root">
                                <div className="item-show-modal">
                                    <img src="{}" alt="item show"></img>
                                    <p>Name: {item.name}</p>
                                    <p>Category: {item.category}</p>
                                    <p>Rate: {item.rate}</p>
                                    <p>Description: {item.description}</p>
                                    <p>Address: {item.address}</p>
                                    <br />
                                    <button className="modalbutton" onClick={() => this.hideItem(`item-show-${item._id}`)}>Close</button>
                                </div>
                            </div>
                        </div>
                    
                </div>
        })
    }

    render() {
        
        return (
                <div className="items-index">
                    {this.listAllItems()}
                </div>
        )
    }
}

export default ItemList;