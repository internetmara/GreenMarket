import { RECEIVE_ALL_SERVICES } from "../actions/item_actions"

const ServicesReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_ALL_SERVICES:
            action.allServices.data.forEach(ele => {
                newState[ele._id] = ele
            })
            return newState;
        default:
            return oldState;
    }
}

export default ServicesReducer;