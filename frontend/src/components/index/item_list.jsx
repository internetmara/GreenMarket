import React from 'react';
import { Link } from 'react-router-dom'
import ItemOwnerShow from './item_owner_show_container';

class ItemList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showOwner: 'n'
        }
    }
    showItem(id) {
        let el = document.getElementsByClassName(id)
        Object.values(el)[0].style.display = 'flex'
    }

    hideItem(id) {
        let el = document.getElementsByClassName(id)
        Object.values(el)[0].style.display = 'none'
        this.setState({ showOwner: 'n' })
    }

    showOwner(ownerId) {
        this.props.getItemOwner(ownerId)
        this.setState({ showOwner: ownerId })
    }

    hideOwner() {
        this.setState({ showOwner: 'n' })
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
                            { this.state.showOwner === item.user ? 
                                <div className="item-show-modal" >
                                    <center><ItemOwnerShow ownerId={item.user} hideOwner={this.hideOwner}/></center>
                                    <button className="modalbutton" onClick={() => this.hideOwner()}>Close</button>
                                </div>
                            :
                                <div className="item-show-modal">
                                <img className="item-show-modal-img" src={item.picture}></img>
                                    <p>Name: {item.name}</p>
                                    <p>Category: {item.category}</p>
                                    <p>Rate: {item.rate}</p>
                                    <p>Description: {item.description}</p>
                                    <p>Address: {item.address}</p>
                                    <button className="sellers-button" onClick={() => this.showOwner(item.user)}>See seller's products</button>
                                    <br />
                                    <button className="modalbutton" onClick={() => this.hideItem(`item-show-${item._id}`)}>Close</button>
                                </div>
                            }   
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