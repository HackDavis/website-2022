import { groupStateAtom } from "../atoms/groupAtom.js";
import { selector } from 'recoil';

export const SetTagsState = selector({
    key:"SetTagsState",
    get: ({get}) => ({...get(groupStateAtom)}), 
    set: ({set, get}, new_tags) => { 
        let groupStateCopy = {...get(groupStateAtom)};
        groupStateCopy.tags2 = new_tags; 
        set(groupStateAtom, groupStateCopy);
    }
});