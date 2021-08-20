const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateProductInput(data) {
    let errors = {}

    data.name = validText(data.name) ? data.name : '';
    data.category = validText(data.category) ? data.category : '';
    data.rate = validText(data.rate) ? data.rate : '';
    data.description = validText(data.description) ? data.description : '';
    data.address = validText(data.address) ? data.address : '';
    data.picture = validText(data.picture) ? data.picture : '';

    if (Validator.isEmpty(data.name)) {
        errors.text = 'Name is required'
    }

    if (Validator.isEmpty(data.category)) {
        errors.text = 'Category is required'
    }

    if (Validator.isEmpty(data.rate)) {
        errors.text = 'Rate is required'
    }

    if (Validator.isEmpty(data.description)) {
        errors.text = 'Description is required'
    }

    if (Validator.isEmpty(data.address)) {
        errors.text = 'Address is required'
    }
    
    if (Validator.isEmpty(data.picture)) {
        errors.text = 'Picture is required'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}