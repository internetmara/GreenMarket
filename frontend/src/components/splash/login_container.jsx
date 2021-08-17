import LoginForm from './login'
import { login } from '../../actions/session_actions'
const { connect } = require("react-redux")


const mSTP = (state) => ({
    
    })

const mDTP = (dispatch) => ({
    login: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(LoginForm)