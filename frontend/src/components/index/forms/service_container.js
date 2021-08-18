import React from "react";
import { connect } from "react-redux";
import { addService } from "../../../util/items_api_util";
import UploadService from "./service_create_form";
import { Link } from "react-router-dom";


const mapStateToProps = (state) => {
    return {
        service: state.entities.service,
        user: state.session.user,
        formType: 'Add a Service',
        navLink: <Link to="/services/new">Add a Service</Link>,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addService: service => dispatch(addService(service)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadService)