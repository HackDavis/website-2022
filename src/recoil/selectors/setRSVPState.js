import { selector } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";

export const SetRSVPState = selector({
    key:"SetRSVPState",
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, response) => { 
        let userStateCopy = {...get(userStateAtom)}
        userStateCopy.rsvp_status = response; 
        set(userStateAtom, userStateCopy)
    }, 

});