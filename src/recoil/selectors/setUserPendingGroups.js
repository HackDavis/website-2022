import { selector } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";

export const SetUserPendingGroups = selector({
    key:"SetUserPendingGroups",
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, pending_groups) => { 
        let userStateCopy = {...get(userStateAtom)}
        userStateCopy.pending_groups = pending_groups; 
        set(userStateAtom, userStateCopy)
    }, 
});