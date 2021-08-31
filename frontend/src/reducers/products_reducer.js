import { ADD_PRODUCT, DELETE_PRODUCT, RECEIVE_ALL_PRODUCTS, UPDATE_PRODUCT } from "../actions/item_actions"

const ProductsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_ALL_PRODUCTS:
            action.allProducts.data.forEach( ele => {
                newState[ele._id] = ele
            })
            return newState;
        case ADD_PRODUCT:
            newState[action.product.data._id] = action.product.data
            // debugger
            return newState;
        case UPDATE_PRODUCT:
            newState[action.product.data._id] = action.product.data
            return newState;
        case DELETE_PRODUCT:
            delete newState[action.product._id]
            return newState;
        default:
            return oldState;
    }
}

export default ProductsReducer;