import React from "react";
import { connect } from "react-redux";
import UploadProduct from "./product_create_form";


const mapStateToProps = (state = {}) => {
    return {
        product: state.entities.product,
        user: state.session.id
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         createProducts: picture => dispatch(createProduct(product)),
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(UploadProduct)