import { userStateAtom } from "../atoms/userAtom.js";
import { selector } from 'recoil';

export const SetUserPendingGroups = selector({
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, pending_groups) => { 
        let userStateCopy = {...get(userStateAtom)}
        userStateCopy.pending_groups = pending_groups; 
        set(userStateAtom, userStateCopy)
    }, 
});