import { RECEIVE_USER_RECORD } from "../actions/session_actions";

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_USER_RECORD:
            return action.user._id = action.user 
        default:
            return oldState;
    }
}

export default UsersReducer;