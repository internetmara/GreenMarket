import { combineReducers } from "redux";
import ProductsReducer from "./products_reducer";
import ServicesReducer from "./services_reducer";

const entitiesReducer = ({
    products: ProductsReducer,
    services: ServicesReducer
})

export default entitiesReducer;