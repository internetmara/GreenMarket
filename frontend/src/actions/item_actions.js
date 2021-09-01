import * as APIUtil from '../util/items_api_util';

export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_SERVICE = "ADD_SERVICE";
export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_ALL_SERVICES = "RECEIVE_ALL_SERVICES";
export const UPDATE_PRODUCT = "UPDATE_USER_PRODUCT"
export const UPDATE_SERVICE = "UPDATE_SERVICE"
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const DELETE_SERVICE = "DELETE_SERVICE"

export const receiveAllProduct = (allProducts) => ({
    type: RECEIVE_ALL_PRODUCTS,
    allProducts
})

export const receiveAllServices = (allServices) => ({
    type: RECEIVE_ALL_SERVICES,
    allServices
})

export const receiveProduct = (product) => ({
    type: ADD_PRODUCT,
    product
})

export const receiveService = (service) => ({
    type: ADD_SERVICE,
    service
})

export const patchProduct = (product) => ({
    type: UPDATE_PRODUCT,
    product
})

export const patchService = (service) => ({
    type: UPDATE_SERVICE,
    service
})

export const removeProduct = (productId) => ({
    type: DELETE_PRODUCT,
    productId
})

export const removeService = (serviceId) => ({
    type: DELETE_SERVICE,
    serviceId
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
        .then(res => dispatch(receiveProduct(res))).catch(
            err => console.log(err)
        )
}

export const addService = (service) => (dispatch) => {
    APIUtil.addService(service)
        .then(res => dispatch(receiveService(res))).catch(
            err => console.log(err)
        )
}

export const updateProduct = (product) => (dispatch) => {
    APIUtil.changeProduct(product)
        .then(res => dispatch(patchProduct(res))).catch(
            err => console.log(err)
        )
}

export const updateService = (service) => (dispatch) => {
    APIUtil.changeService(service)
        .then(res => dispatch(patchService(res))).catch(
            err => console.log(err)
        )
}

export const deleteProduct = (product) => (dispatch) => {
    APIUtil.deleteProduct(product)
        .then(() => dispatch(removeProduct(product))).catch(
            err => console.log(err)
        )
}

export const deleteService = (service) => (dispatch) => {
    APIUtil.deleteService(service)
        .then(() => dispatch(removeService(service))).catch(
            err => console.log(err)
        )
}