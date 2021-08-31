const { RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN, RECEIVE_CURRENT_USER, UPDATE_USER } = require ("../actions/session_actions");

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function foo(state=initialState, action) {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      }
    case UPDATE_USER:
      return {
        ...state,
        user: action.userData.data
      } 
    default:
      return state;
  }
}