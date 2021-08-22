import { connect } from "react-redux";
import { getProduct, getProducts } from "../../actions/item_actions";
import { getUser } from "../../actions/session_actions";
import ProductIndexItem from "./product_index_item";

const mSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.itemId]
})

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
    // getProduct: (id) => dispatch(getProduct(id))
})

export default connect(mSTP, mDTP)(ProductIndexItem)