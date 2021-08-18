import LoginForm from './login'
import { login, logout } from '../../actions/session_actions'
import { Link } from 'react-router-dom'
const { connect } = require("react-redux")


const mSTP = (state) => ({
    loggedIn: state.session.isAuthenticated,
    formType: 'Log in',
    errors: state.errors.session,
    navLink: <Link to="/signup">Sign up</Link>,
    })

const mDTP = (dispatch) => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(LoginForm)