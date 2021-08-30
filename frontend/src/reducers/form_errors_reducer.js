const { RECEIVE_FORM_ERRORS } = require("../actions/form_actions");

const FormErrorsReducer = (oldState=[], action) => {
    Object.freeze(oldState)
    // let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_FORM_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
}

export default FormErrorsReducer;