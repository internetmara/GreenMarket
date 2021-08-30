import SignupForm from './signup'
import { signup, clearSessionErrors } from '../../actions/session_actions'
import { Link } from 'react-router-dom'
import '../styling/reset.css'
const { connect } = require("react-redux")

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">Log in</Link>
})

const mDTP = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP,mDTP)(SignupForm)