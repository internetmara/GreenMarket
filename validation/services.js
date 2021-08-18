const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateServiceInput(data) {
    let errors = {}

    data.name = validText(data.name) ? data.name : '';
    data.category = validText(data.category) ? data.category : '';
    data.rate = validText(data.rate) ? data.rate : '';
    data.rateIncrement = validText(data.rateIncrement) ? data.rateIncrement : '';
    data.description = validText(data.description) ? data.description : '';
    data.address = validText(data.address) ? data.address : '';

    if (Validator.isEmpty(data.name)) {
        errors.text = 'Name is required'
    }

    if (Validator.isEmpty(data.category)) {
        errors.text = 'Category is required'
    }

    if (Validator.isEmpty(data.rate)) {
        errors.text = 'Rate is required'
    }

    if (Validator.isEmpty(data.rateIncrement)) {
        errors.text = 'Rate Increment is required'
    }

    if (Validator.isEmpty(data.description)) {
        errors.text = 'Description is required'
    }

    if (Validator.isEmpty(data.address)) {
        errors.text = 'Address is required'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}