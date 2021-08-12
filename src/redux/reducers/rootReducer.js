import { combineReducers } from "redux";
import userReducer from "./userReducer";

// This function causes our state to be nested one level deep - so state.user is how you access all of the 
// state from the userReducer.
export default combineReducers({ 
    user: userReducer
}); 