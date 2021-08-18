import React from "react";
import { connect } from "react-redux";
import UploadProduct from "./upload_product";


const mapStateToProps = (state = {}) => {
    return {
        // currentUser: state.session.id 
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
        // need thunk action to send the item to DB
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(UploadPicture)