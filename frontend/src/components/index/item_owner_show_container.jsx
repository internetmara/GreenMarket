import { connect } from 'react-redux'
import ItemOwnerShow from './item_owner_show'
import { updateProduct, updateService, deleteProduct, deleteService } from '../../actions/item_actions'

const mSTP = (state, ownProps) => {
    return {
        // user: state.entities.users,
        users: state.entities.users,
        products: state.entities.products,
        services: state.entities.services,
        currentUser: state.session.user
    }
}

const mDTP = (dispatch) => ({
    updateProduct: (product) => dispatch(updateProduct(product)),
    updateService: (service) => dispatch(updateService(service)),
    deleteProduct: (productId) => dispatch(deleteProduct(productId)),
    deleteService: (serviceId) => dispatch(deleteService(serviceId))
})

export default connect(mSTP,mDTP)(ItemOwnerShow)