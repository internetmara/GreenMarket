// import jwt_decode from 'jwt-decode';
const { setAuthToken } = require("../util/session_api_util")
// const * as APIUtil fro './util/session_api_util';
// import * as APIUtil from './util/session_api_util';

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const logout = () => (dispatch) => {
    localStorage.removeItem('jwToken')
    setAuthToken(false)
    dispatch(logoutUser())
}