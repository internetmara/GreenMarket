import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../../../actions/item_actions";
import UploadProduct from "./product_create_form";

import { Link } from "react-router-dom";


const mapStateToProps = (state) => {
    return {
        product: state.entities.product,
        user: state.session.user,
        formType: 'Add a Product',
        navLink: <Link to="/products/new">Add a Product</Link>,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: product => dispatch(addProduct(product)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UploadProduct)