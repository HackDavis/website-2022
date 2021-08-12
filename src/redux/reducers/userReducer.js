import { FETCH_USER } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) { 
    switch (action.type) { 
        case FETCH_USER: 
            console.log("fetching user:", action.payload);
            return { 
                ...state,
                ...action.payload
            };
        
        default: 
            return state; 
    }
}; 