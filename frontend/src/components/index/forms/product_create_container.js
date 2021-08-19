import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../../../actions/item_actions";
import UploadProduct from "./product_create_form";

import { Link } from "react-router-dom";


const mapStateToProps = (state) => {
    return {
        product: state.entities.product,
        user: state.session.user,
        formType: 'Product',
        navLink: <Link to="/services/new">service</Link>,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: product => dispatch(addProduct(product)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UploadProduct)