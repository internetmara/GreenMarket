import { RECEIVE_ALL_PRODUCTS } from "../actions/item_actions"

const ProductsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_ALL_PRODUCTS:
            action.allProducts.data.forEach( ele => {
                newState[ele._id] = ele
            })
            return newState
        default:
            return oldState;
    }
}

export default ProductsReducer;