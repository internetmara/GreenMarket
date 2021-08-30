import { connect } from "react-redux";
import { getServices } from "../../actions/item_actions";
import ServiceIndexItem from "./service_show";

const mSTP = (state, ownProps) => ({
    service: state.entities.services[ownProps.match.params.itemId]
})

const mDTP = (dispatch) => ({
    getServices: () => dispatch(getServices())
})

export default connect(mSTP, mDTP)(ServiceIndexItem)