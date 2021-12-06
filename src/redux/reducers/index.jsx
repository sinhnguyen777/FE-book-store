import { combineReducers } from "redux";
import ProductReducers from "./ProductReducer";

const rootReducers = combineReducers({
    products: ProductReducers
})

export default rootReducers;