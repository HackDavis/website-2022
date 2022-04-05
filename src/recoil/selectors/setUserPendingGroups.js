import { selector } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";

export const SetUserPendingGroups = selector({
    key:"SetUserPendingGroups",
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, pending_groups) => { 
        let userStateCopy = {...get(userStateAtom)};
        console.log("pending groups selector pre change", userStateCopy.pending_groups);
        console.log("pending groups with the remove", pending_groups);
        userStateCopy.pending_groups = pending_groups; 
        console.log("pending groups selector post change", userStateCopy.pending_groups);
        set(userStateAtom, userStateCopy);
    }
});