const { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USERS, CLEAR_SESSION_ERRORS } = require("../actions/session_actions");

const SessionErrorsReducer = (oldState=[], action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USERS:
            return [];
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return oldState;
    }
}

export default SessionErrorsReducer;