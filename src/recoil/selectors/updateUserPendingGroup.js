import { userStateAtom } from "../atoms/userAtom.js";
import { selector } from 'recoil';

export const updateUserPendingGroup = selector({
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, pending_group) => { 
        let userStateCopy = {...get(userStateAtom)}
        let pending_groups_arr = userStateCopy.pending_groups;
        pending_groups_arr.push(pending_group);
        userStateCopy.pending_groups = pending_groups_arr; 
        set(userStateAtom, userStateCopy)
    }, 
});