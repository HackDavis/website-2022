import { groupStateAtom } from "../atoms/groupAtom.js";
import { selector } from 'recoil';

export const SetGroupName = selector({
    key:"SetGroupName",
    get: ({get}) => ({...get(groupStateAtom)}), 
    set: ({set, get}, newGroupName) => { 
        let groupStateCopy = {...get(groupStateAtom)};
        groupStateCopy.group_name = newGroupName; 
        set(groupStateAtom, groupStateCopy);
    }
});