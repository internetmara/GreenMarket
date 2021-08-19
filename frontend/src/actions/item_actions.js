import * as APIUtil from '../util/items_api_util';

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_ALL_SERVICES = "RECEIVE_ALL_SERVICES";
export const ADD_USER_PRODUCT = "ADD_USER_PRODUCT";
export const ADD_USER_SERVICE = "ADD_USER_SERVICE";
export const UPDATE_USER_PRODUCT = "UPDATE_USER_PRODUCT"
export const UPDATE_USER_SERVICE = "UPDATE_USER_SERVICE"
export const DELETE_USER_PRODUCT = "DELETE_USER_PRODUCT"
export const DELETE_USER_SERVICE = "DELETE_USER_SERVICE"

export const receiveAllProduct = (allProducts) => ({
    type: RECEIVE_ALL_PRODUCTS,
    allProducts
})

export const receiveAllServices = (allServices) => ({
    type: RECEIVE_ALL_SERVICES,
    allServices
})

export const addUserProduct = (product) => ({
    type: ADD_USER_PRODUCT,
    product
})

export const addUserService = (service) => ({
    type: ADD_USER_SERVICE,
    service
})

export const updateUserProduct = (product) => ({
    type: UPDATE_USER_PRODUCT,
    product
})

export const updateUserService = (service) => ({
    type: UPDATE_USER_SERVICE,
    service
})

export const deleteUserProduct = (product) => ({
    type: DELETE_USER_PRODUCT,
    product
})

export const deleteUserService = (service) => ({
    type: DELETE_USER_SERVICE,
    service
})

export const getProducts = () => (dispatch) => {
    APIUtil.getProducts()
    .then( res => dispatch(receiveAllProduct(res)) )
}

export const getServices = () => (dispatch) => {
    APIUtil.getServices()
        .then(res => dispatch(receiveAllServices(res)))
}

export const getProduct = (itemId) => (dispatch) => {
    APIUtil.getProduct(itemId)
        .then(res => dispatch(receiveAllProduct(res))).catch(
            err => console.log(err)
        )
}

export const getService = (itemId) => (dispatch) => {
    APIUtil.getService(itemId)
        .then(res => dispatch(receiveAllServices(res))).catch(
            err => console.log(err)
        )
}

export const addProduct = (product) => (dispatch) => {
    APIUtil.addProduct(product)
        .then(res => dispatch(addUserProduct(res))).catch(
            err => console.log(err)
        )
}

export const addService = (service) => (dispatch) => {
    APIUtil.addService(service)
        .then(res => dispatch(addUserService(res))).catch(
            err => console.log(err)
        )
}

export const updateProduct = (product) => (dispatch) => {
    APIUtil.changeProduct(product)
        .then(res => dispatch(updateUserProduct(res))).catch(
            err => console.log(err)
        )
}

export const updateService = (service) => (dispatch) => {
    APIUtil.changeService(service)
        .then(res => dispatch(updateUserService(res))).catch(
            err => console.log(err)
        )
}

export const deleteProduct = (product) => (dispatch) => {
    APIUtil.deleteProduct(product)
        .then(res => dispatch(deleteUserProduct(res))).catch(
            err => console.log(err)
        )
}

export const deleteService = (service) => (dispatch) => {
    APIUtil.deleteService(service)
        .then(res => dispatch(deleteUserService(res))).catch(
            err => console.log(err)
        )
}