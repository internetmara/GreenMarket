import LoginForm from './login'
import { login, logout } from '../../actions/session_actions'
const { connect } = require("react-redux")


const mSTP = (state) => ({
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session
    })

const mDTP = (dispatch) => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(LoginForm)