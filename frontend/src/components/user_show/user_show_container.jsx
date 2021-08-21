import { connect } from "react-redux";
import { getProduct, getProducts, getService, getServices } from "../../actions/item_actions";

import userShow from "./user_show";
import '../styling/reset.css'

const mSTP = (state) => ({
    user: state.session.user,
    // itemId: state.match.params.itemId,
    // item: state.entities.
})

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
    getServices: () => dispatch(getServices()),
    // getUser: (userId) => dispatch(getUser(userId))
    // getProduct: itemId => dispatch(getProduct(itemId)),
    // getService: itemId => dispatch(getService(itemId))
})

export default connect(mSTP, mDTP)(userShow);