import { selector } from 'recoil';
import { groupStateAtom } from '../atoms/groupAtom.js';

export const DeletePendingMember = selector({
    key:"DeletePendingMember",
    get: ({get}) => ({...get(groupStateAtom)}), 
    set: ({set, get}, new_pending_members) => { 
        let groupStateCopy = {...get(groupStateAtom)};
        groupStateCopy.pending_members = new_pending_members; 
        set(groupStateAtom, groupStateCopy);
    }
});