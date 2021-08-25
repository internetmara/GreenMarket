import { RECEIVE_ALL_SERVICES, ADD_SERVICE, UPDATE_SERVICE, DELETE_SERVICE } from "../actions/item_actions"

const ServicesReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_ALL_SERVICES:
            action.allServices.data.forEach(ele => {
                newState[ele._id] = ele
            })
            return newState;
        case ADD_SERVICE:
            newState[action.service._id] = newState.service
            return newState;
        case UPDATE_SERVICE:
            newState[action.service._id] = newState.service
            return newState;
        case DELETE_SERVICE:
            delete newState[action.service._id]
            return newState;
        default:
            return oldState;
    }
}

export default ServicesReducer;