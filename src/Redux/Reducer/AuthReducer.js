import { ACTION_CONSTANTS } from "../Actions/ActionConstants";

const InitialState = {
  userdata: {},
  IsLoggedIn: false,
};
function AuthReducer(state = InitialState, action) {
  console.log("action", action);
  switch (action.type) {
    case ACTION_CONSTANTS.SIGN_IN_SUCCESS:
      return {
        ...state,
        userdata: action.payload, // PAYLOAD =API data
        IsLoggedIn: true,
      };
    case ACTION_CONSTANTS.SIGN_IN_FAIL:
      return {
        ...state,
        userdata: {},
        IsLoggedIn: false,
      };

    default:
      return state;
  }
}
export default AuthReducer;
