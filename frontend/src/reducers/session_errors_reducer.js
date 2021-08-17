const { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USERS } = require("../actions/session_actions");

const SessionErrorsReducer = (oldState=[], action) => {
    Object.freeze(oldState)
    // let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USERS:
            return [];
        default:
            return oldState;
    }
}

export default SessionErrorsReducer;