const axios = require('axios');

export const getProducts = () => {
    return axios.post('/api/products/' )
};

export const getServices = () => {
    return axios.post('/api/services/')
};

export const addProduct = (prodData) => {
    return axios.post('/api/products/new', prodData )
}

export const addService = (servData) => {
    return axios.post('/api/services/new', servData)
}

export const changeProduct = (prodData) => {
    return axios.post('/api/products/edit', prodData)
}

export const changeService = (servData) => {
    return axios.post('/api/services/edit', servData)
}

export const deleteProduct = () => {
    return axios.post('/api/products/delete', )
}

export const deleteService = () => {
    return axios.post('/api/services/delete', )
}