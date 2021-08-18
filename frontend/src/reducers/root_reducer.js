import { combineReducers } from 'redux';
// import session from './session_reducer';
// import errors from './errors_reducer'
// import entities from './entities_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    entities: entitiesReducer
});

export default RootReducer;