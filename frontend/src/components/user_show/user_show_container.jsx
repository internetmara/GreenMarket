import { connect } from "react-redux";
import { getProducts, getServices } from "../../actions/item_actions";
import { updateProduct, updateService, deleteProduct, deleteService } from '../../actions/item_actions'
import userShow from "./user_show";
import '../styling/reset.css'
import { getUser, updateUser } from '../../actions/session_actions';

const mSTP = (state) => ({
    user: state.session.user,
    products: state.entities.products,
    services: state.entities.services
})

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
    getServices: () => dispatch(getServices()),
    getUser: (id) => dispatch(getUser(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    updateProduct: (product) => dispatch(updateProduct(product)),
    updateService: (service) => dispatch(updateService(service)),
    deleteProduct: (productId) => dispatch(deleteProduct(productId)),
    deleteService: (serviceId) => dispatch(deleteService(serviceId))
})

export default connect(mSTP, mDTP)(userShow);