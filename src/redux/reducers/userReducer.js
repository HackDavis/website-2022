import { FETCH_USER, MEMBER_ACCEPT } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) { 
    switch (action.type) { 
        case FETCH_USER: 
            console.log("fetching user:", action.payload);
            return { 
                ...state,
                ...action.payload
            };
        case MEMBER_ACCEPT: 
            console.log("calling member accepted from userReducer:", action.payload);
            return { 
                ...state,
                ...action.payload
            };
        
        default: 
            return state; 
    }
}; 