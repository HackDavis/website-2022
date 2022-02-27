import { selector } from 'recoil';
import { groupStateAtom } from '../atoms/groupAtom.js';

export const updateGroupPendingMember = selector({
    key:"updateGroupPendingMember",
    get: ({get}) => ({...get(groupStateAtom)}), 
    set: ({set, get}, pending_members_map_copy) => { 
        let groupStateCopy = {...get(groupStateAtom)};
        // console.log("here");
        // let pending_groups_map = groupStateCopy.pending_members;
        // pending_groups_map["testingID"] = "testingvalue";
        // console.log(pending_groups_map);
        groupStateCopy.pending_members = pending_members_map_copy; 
        set(groupStateAtom, groupStateCopy);
    }
});