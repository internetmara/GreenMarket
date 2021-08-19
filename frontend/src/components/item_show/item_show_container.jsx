import { connect } from "react-redux";
import { getProduct, getProducts, getService, getServices } from "../../actions/item_actions";
import ItemShow from "./item_show";

const mSTP = (state) => ({
    user: state.session.user,
    itemId: state.match.params.itemId,
    // item: state.entities.
})

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
    getServices: () => dispatch(getServices())
    // getProduct: itemId => dispatch(getProduct(itemId)),
    // getService: itemId => dispatch(getService(itemId))
})

export default connect(mSTP, mDTP)(ItemShow);