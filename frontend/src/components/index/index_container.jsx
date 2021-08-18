import React from 'react';
import { connect } from 'react-redux';
import { getProducts, getServices } from '../../actions/item_actions';
import IndexComponent from "./index"

const mSTP = (state) => ({
    products: state.products,
    services: state.services
})

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
    getServices: () => dispatch(getServices())
})

export default connect(mSTP,mDTP)(IndexComponent)