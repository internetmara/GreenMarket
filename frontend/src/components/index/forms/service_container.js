import React from "react";
import { connect } from "react-redux";
import { addService } from "../../../util/items_api_util";
import UploadService from "./service_create_form";
import { Link } from "react-router-dom";


const mapStateToProps = (state) => {
    return {
        service: state.entities.service,
        user: state.session.user,
        formType: 'Service',
        navLink: <Link to="/products/new">product</Link>,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addService: service => dispatch(addService(service)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadService)