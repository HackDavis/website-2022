import { selector } from 'recoil';
import { groupStateAtom } from '../atoms/groupAtom.js';

export const updateGroupPendingMember = selector({
    key:"updateGroupPendingMember",
    get: ({get}) => ({...get(groupStateAtom)}), 
    set: ({set, get}, pending_members_map_copy) => { 
        let groupStateCopy = {...get(groupStateAtom)};
        groupStateCopy.pending_members = pending_members_map_copy; 
        set(groupStateAtom, groupStateCopy);
    }
});