import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import CartReducer from "./CartReducer";

const RootReducer = combineReducers({
  AuthReducer: AuthReducer,
  CartReducer : CartReducer ,
  

});

export default RootReducer;
