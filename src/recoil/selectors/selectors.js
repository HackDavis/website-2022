import { atom, selector } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";

export const SetRSVPState = selector({
    // Note: with the new method that Omid added,
    // having the key for the selector is no longer necessary(?)
    // key: 'rsvp_status', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, response) => { 
        let userStateCopy = {...get(userStateAtom)}
        userStateCopy.rsvp_status = response; 
        set(userStateAtom, userStateCopy)
    }, 

});

export const SetUserGroup = selector({
    // Note: with the new method that Omid added,
    // having the key for the selector is no longer necessary(?)
    // key: 'rsvp_status', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, new_group_id) => { 
        let userStateCopy = {...get(userStateAtom)}
        userStateCopy.group_id = new_group_id; 
        set(userStateAtom, userStateCopy)
    }, 

});