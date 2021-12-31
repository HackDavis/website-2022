import { selector } from 'recoil';
import { groupStateAtom } from '../atoms/groupAtom.js';

export const SetGroupMembers = selector({
    key:"SetGroupMembers",
    get: ({get}) => ({...get(groupStateAtom)}), 
    set: ({set, get}, new_group_members) => { 
        let groupStateCopy = {...get(groupStateAtom)};
        groupStateCopy.members = new_group_members; 
        set(groupStateAtom, groupStateCopy);
    }
});