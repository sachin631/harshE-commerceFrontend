import { ProductReducer } from "./ProductReducer";
import { combineReducers } from "redux";

const rootReducers=combineReducers({
    ProductData:ProductReducer
})
export default rootReducers;