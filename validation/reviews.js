const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReviewInput(data) {
    let errors = {}
    
    data.type = validText(data.type) ? data.type : '';
    data.rating = validText(data.rating) ? data.rating : '';
    data.description = validText(data.description) ? data.description : '';

    if (Validator.isEmpty(data.type)) {
        errors.text = 'Type is required'
    }

    if (Validator.isEmpty(data.rating)) {
        errors.text = 'Rating is required'
    }

    if (Validator.isEmpty(data.description)) {
        errors.text = 'Description is required'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}