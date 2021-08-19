const axios = require('axios');

export const getProducts = () => {
    return axios.get('/api/products/' )
};

export const getServices = () => {
    return axios.get('/api/services/')
};

export const getProduct = (id) => {
    return axios.get(`/api/products/${id}`)
};

export const getService = (id) => {
    return axios.get(`/api/services/${id}`)
};

export const addProduct = (prodData) => {
    return axios.post('/api/products/create', prodData )
}

export const addService = (servData) => {
    return axios.post('/api/services/create', servData)
}

export const changeProduct = (prodData) => {
    return axios.patch('/api/products/edit', prodData)
}

export const changeService = (servData) => {
    return axios.patch('/api/services/edit', servData)
}

export const deleteProduct = () => {
    return axios.post('/api/products/delete', )
}

export const deleteService = () => {
    return axios.post('/api/services/delete', )
}