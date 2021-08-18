import { combineReducers } from "redux";
import ProductsReducer from "./products_reducer";
import ServicesReducer from "./services_reducer";

export default combineReducers({
    products: ProductsReducer,
    services: ServicesReducer
})