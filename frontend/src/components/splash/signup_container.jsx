import SignupForm from './signup'
import { signup } from '../../actions/session_actions'
const { connect } = require("react-redux")


const mSTP = (state) => ({
    user: {
        email: '',
        username: '',
        password: '',
        address: '',
        avatar: '',
        products: [],
        services: [],
        reviews: [],
        buyerPoints: 0,
        sellerPoints: 0
    }
})

const mDTP = (dispatch) => ({
    signup: user => dispatch(signup(user))
})

export default connect(mSTP,mDTP)(SignupForm)