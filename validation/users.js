const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateUserInput(data) {
    let errors = {};

    data.username = validText(data.username) ? data.username : '';
    data.email = validText(data.email) ? data.email : '';
    data.address = validText(data.address) ? data.address : '';
    // data.password2 = validText(data.password2) ? data.password2 : '';

    if (!Validator.isLength(data.username, { min: 8, max: 30 })) {
        errors.username = 'Username must be between 8 and 30 characters';
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username field is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (Validator.isEmpty(data.address)) {
        errors.address = 'Address is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};