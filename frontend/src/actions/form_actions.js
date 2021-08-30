export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_FORM_ERRORS = "RECEIVE_FORM_ERRORS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveFormErrors = errors => ({
    type: RECEIVE_FORM_ERRORS,
    errors
});
