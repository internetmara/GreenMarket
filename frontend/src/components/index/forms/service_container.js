import React from "react";
import { connect } from "react-redux";
import { addService } from "../../../actions/item_actions";
import UploadService from "./service_create_form";
import { Link } from "react-router-dom";
import '../../styling/reset.css';


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