import { selector } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";

export const DeletePendingGroup = selector({
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, new_pending_groups) => { 
        let userStateCopy = {...get(userStateAtom)}; 
        userStateCopy.pending_groups = new_pending_groups; 
        set(userStateAtom, userStateCopy); 
    }, 
});