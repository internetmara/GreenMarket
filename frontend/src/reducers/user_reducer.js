import { RECEIVE_USER_RECORD } from "../actions/session_actions";

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_USER_RECORD:
            newState[action.user._id] = action.user
            return newState;
        
        default:
            return oldState;
    }
}

export default UsersReducer;