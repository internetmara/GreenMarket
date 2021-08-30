import LoginForm from './login'
import { login, logout, clearSessionErrors } from '../../actions/session_actions'
import { Link } from 'react-router-dom'
import '../styling/reset.css'
const { connect } = require("react-redux")


const mSTP = (state) => ({
    loggedIn: state.session.isAuthenticated,
    formType: 'Log in',
    errors: state.errors.session,
    // navLink: <Link to="/signup">Sign up</Link>,
    navLink: 'Sign up',
    })

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(LoginForm)