import { connect } from "react-redux";
import { getProducts } from "../../actions/item_actions";
import ProductIndexItem from "./product_show";

const mSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.itemId]
})

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
})

export default connect(mSTP, mDTP)(ProductIndexItem)