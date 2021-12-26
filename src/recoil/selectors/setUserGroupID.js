import { userStateAtom } from "../atoms/userAtom.js";
import { selector } from 'recoil';

export const SetUserGroupID = selector({
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, new_group_id) => { 
        let userStateCopy = {...get(userStateAtom)}
        userStateCopy.group_id = new_group_id; 
        set(userStateAtom, userStateCopy)
    }, 
});