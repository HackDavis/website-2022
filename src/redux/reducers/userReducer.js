import {
  FETCH_USER,
  MEMBER_ACCEPT,
  SET_RSVP,
  GROUP_APPLICATION,
	GET_USER
} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log("fetching user:", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case MEMBER_ACCEPT:
      console.log("calling member accepted from userReducer:", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case SET_RSVP:
      console.log("setting rsvp ", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case GROUP_APPLICATION:
      console.log("group application:", action.payload);
      return {
        ...state,
        ...action.payload,
      };
		case GET_USER:
			console.log("get user:", action.payload);
			return {
				...state,
        ...action.payload,
			};
    default:
      return state;
  }
}
