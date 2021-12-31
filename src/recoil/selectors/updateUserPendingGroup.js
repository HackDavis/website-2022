import { userStateAtom } from "../atoms/userAtom.js";
import { selector } from 'recoil';

export const updateUserPendingGroup = selector({
    key:"updateUserPendingGroup",
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, group_id) => { 
        let userStateCopy = {...get(userStateAtom)}
        let pending_groups_arr = [...userStateCopy.pending_groups, group_id]
        userStateCopy.pending_groups = pending_groups_arr; 
        set(userStateAtom, userStateCopy)
    }, 
});