// import React from 'react';
import { connect } from 'react-redux';
import { getProducts, getServices } from '../../actions/item_actions';
import { getUser, getItemOwner } from '../../actions/session_actions';
import IndexComponent from "./index"
import '../styling/reset.css'

const mSTP = (state) => ({
    products: state.entities.products,
    services: state.entities.services,
    user: state.session.user,
    itemOwner: state.entities.users
})

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
    getServices: () => dispatch(getServices()),
    getUser: (userId) => dispatch(getUser(userId)),
    getItemOwner: (userId) => dispatch(getItemOwner(userId)),

})

export default connect(mSTP,mDTP)(IndexComponent)