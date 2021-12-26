import { selector } from 'recoil';
import { groupStateAtom } from '../atoms/groupAtom.js';

export const updateGroupPendingMember = selector({
    get: ({get}) => ({...get(groupStateAtom)}), 
    set: ({set, get}, user_id, name, email) => { 
        let groupStateCopy = {...get(groupStateAtom)}
        let pending_groups_map = groupStateCopy.pending_members;
        pending_groups_map[user_id] = [name, email];
        groupStateCopy.pending_members = pending_groups_map; 
        set(groupStateAtom, groupStateCopy)
    }, 
});