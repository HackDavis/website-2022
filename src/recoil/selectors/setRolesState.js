import { groupStateAtom } from "../atoms/groupAtom.js";
import { selector } from 'recoil';

export const SetRolesState = selector({
    key:"SetRolesState",
    get: ({get}) => ({...get(groupStateAtom)}), 
    set: ({set, get}, new_roles) => { 
        let groupStateCopy = {...get(groupStateAtom)};
        groupStateCopy.tags1 = new_roles; 
        set(groupStateAtom, groupStateCopy);
    }
});