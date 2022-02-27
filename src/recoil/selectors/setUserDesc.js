import { userStateAtom } from "../atoms/userAtom.js";
import { selector } from 'recoil';

export const SetUserDescription = selector({
    key:"SetUserDescription",
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, desc) => { 
        let userStateCopy = {...get(userStateAtom)}
        userStateCopy.description = desc; 
        set(userStateAtom, userStateCopy)
    }, 
});