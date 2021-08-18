import React from "react";
import { connect } from "react-redux";
import { addProduct, addService } from "../../../util/items_api_util";
import UploadProduct from "./product_create_form";
import UploadService from "./service_create_form";
import { Link } from "react-router-dom";


const mapStateToProps = (state = {}) => {
    return {
        services: state.entities.services,
        user: state.session.id,
        formType: 'Add a Service',
        navLink: <Link to="/service/new">Add a Service</Link>,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addService: service => dispatch(addService(service)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadService)