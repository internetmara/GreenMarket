import React from 'react';
import { Link } from 'react-router-dom'
import ItemOwnerShow from './item_owner_show_container';
import '../styling/reset.css';

class ItemList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showOwner: 'n',
            showContactInfo: 'n'
        }
        this.showOwnerFunc = this.showOwnerFunc.bind(this)
    }
    showItem(id) {
        let el = document.getElementsByClassName(id)
        Object.values(el)[0].style.display = 'flex'
    }
    
    hideItem(id) {
        let el = document.getElementsByClassName(id)
        Object.values(el)[0].style.display = 'none'
        this.setState({ showOwner: 'n', showContactInfo: 'n' })
    }
    
    showOwnerFunc(ownerId) {
        this.props.getItemOwner(ownerId)
        this.setState({ showOwner: ownerId })
    }
    
    showContactInfo(ownerId) {
        this.props.getItemOwner(ownerId)
        this.setState({ showContactInfo: 'y' })
    }

    hideOwner() {
        this.setState({ showOwner: 'n', showContactInfo: 'n' })
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
                            <div className="item-show-modal2" >
                                <button className="item-owner-show-modalbutton" onClick={() => this.hideOwner()}>X</button>
                                <center><ItemOwnerShow ownerId={item.user} /></center>
                            </div>
                        :
                            <div className="item-show-modal-whole">
                            
                            <button className="modalbutton-close" onClick={() => this.hideItem(`item-show-${item._id}`)}>X</button>
                                <div className="item-show-modal">
                                    <img className="item-show-modal-img" src={item.picture}></img>
                                    <div className="item-show-modal-product-info">
                                        <p>Name: {item.name}</p>
                                        <p>Category: {item.category}</p>
                                        <p>Rate: {item.rate}</p>
                                        <p>Description: {item.description}</p>
                                        <p>Address: {item.address}</p>
                                    </div>
                                    <div className="item-show-modal-button-box">
                                        <button className="contact-button" onClick={() => this.showContactInfo(item.user)}>Contact Seller</button>
                                        <button className="sellers-button" onClick={() => this.showOwnerFunc(item.user)}>See seller's products</button>
                                    </div>
                                    {this.state.showContactInfo === 'y' ? <p>Seller Contact: <a href={`mailto:${this.props.itemOwner.email}`}>{this.props.itemOwner.email}</a></p> : ''}
                                </div>
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