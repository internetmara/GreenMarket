import jwt_decode from 'jwt-decode';
import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const UPDATE_USER = "UPDATE_USER";
export const RECEIVE_USER_RECORD = "RECEIVE_USER_RECORD";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveUserSignIn = (currentUser) => ({
    type: RECEIVE_USER_SIGN_IN,
    currentUser
});

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const patchUser = (userData) => ({
    type: UPDATE_USER,
    userData
})

export const receiveUserRecord = (user) => ({
    type: RECEIVE_USER_RECORD,
    user
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = errors => ({
    type: CLEAR_SESSION_ERRORS,
    errors
});


export const signup = user => (dispatch) => (
    APIUtil.signup(user)
    .then( 
        () => dispatch(receiveUserSignIn(user)),
        (err) => dispatch(receiveErrors(err.response.data))
    )
)

export const login = user => (dispatch) => (
    APIUtil.login(user)
    .then( (res) => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch( err => {
        dispatch(receiveErrors(err.response.data))
    })
)

export const logout = () => (dispatch) => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
}


export const updateUser = (userData) => (dispatch) => {
    APIUtil.updateUser(userData)
    .then( res => {
        () => dispatch(patchUser(res))
    })
    .catch(err => {
        console.log(err)
    })
}

export const getUser = (userId) => (dispatch) => {
    APIUtil.getUser(userId)
        .then(res => dispatch(receiveCurrentUser(res.data)))
}


export const getItemOwner = (userId) => (dispatch) => {
    APIUtil.getUser(userId)
        .then(res => dispatch(receiveUserRecord(res.data)))
}