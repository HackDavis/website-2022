import { groupStateAtom } from "../atoms/groupAtom.js";
import { selector } from 'recoil';

export const SetGroupDescription = selector({
    key:"SetGroupDescription",
    get: ({get}) => ({...get(groupStateAtom)}), 
    set: ({set, get}, desc) => { 
        let groupStateCopy = {...get(groupStateAtom)};
        groupStateCopy.description = desc; 
        set(groupStateAtom, groupStateCopy);
    }
});