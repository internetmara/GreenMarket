import LoginForm from './signup'
import { login } from '../../actions/session_actions'
const { connect } = require("react-redux")


const mSTP = (state) => ({
    user: this.state.match.params.userId
    })

const mDTP = (dispatch) => ({
    login: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(LoginForm)