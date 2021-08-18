import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../../../util/items_api_util";
import UploadProduct from "./product_create_form";
import { Link } from "react-router-dom";


const mapStateToProps = (state = {}) => {
    return {
<<<<<<< HEAD
        products: state.entities.products,
        user: state.session.id,
        formType: 'Add a Product',
        navLink: <Link to="/product/new">Add a Product</Link>,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: product => dispatch(addProduct(product)),
    };
};
=======
        // currentUser: state.session.id 
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
        // need thunk action to send the item to DB
//     };
// };
>>>>>>> 357798857503a3d89d596edcc666c16d1214dab1

export default connect(mapStateToProps, mapDispatchToProps)(UploadProduct)