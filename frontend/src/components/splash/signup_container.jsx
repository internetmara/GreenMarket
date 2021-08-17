import SignupForm from './signup'
import { signup } from '../../actions/session_actions'
const { connect } = require("react-redux")


const mSTP = (state) => ({
    errors: state.errors.session
})

const mDTP = (dispatch) => ({
    signup: user => dispatch(signup(user))
})

export default connect(mSTP,mDTP)(SignupForm)