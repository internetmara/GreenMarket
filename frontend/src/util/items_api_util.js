const axios = require('axios');

export const getProducts = () => {
    return axios.get('api/products/' )
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

export const addProduct = (prodData) => (
    axios.post('/api/products/create', prodData )
    .then( (res) => console.log(res))
    .catch( (err) => console.log(err))
)

export const addService = (servData) => {
    return axios.post('/api/services/create', servData)
}

export const changeProduct = (prodData) => {
    return axios.patch(`/api/products/${prodData.id}/update`, prodData)
}

export const changeService = (servData) => {
    return axios.patch(`/api/services/${servData.id}/update`, servData)
}

export const deleteProduct = (productId) => {
    return axios.delete(`/api/products/delete/${productId}` )
}

export const deleteService = (serviceId) => {
    return axios.delete(`/api/services/delete/${serviceId}` )
}