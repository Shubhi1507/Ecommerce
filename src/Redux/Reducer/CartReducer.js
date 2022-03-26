import { ACTION_TYPES } from "../Actions/ActionTypes";

const InitialState = {
  cartdata: [],
};
function CartReducer(state = InitialState, action) {
  // console.log("action", action);
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        cartdata: [...state.cartdata ,action.payload],
      };
    case ACTION_TYPES.EMPTY_CART:
      return {
        ...state,
        cartdata: [],
      };
    case ACTION_TYPES.UPDATE_CART:
      return {
        ...state,
        cartdata: action.payload
      };
    default:
      return state;
  }
}

export default CartReducer;
