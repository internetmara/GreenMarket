import { connect } from 'react-redux'
import ItemOwnerShow from './item_owner_show'

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.ownerId],
        users: state.entities.users,
        products: state.entities.products,
        services: state.entities.services
    }
}

const mDTP = (dispatch) => ({
    
})

export default connect(mSTP,mDTP)(ItemOwnerShow)