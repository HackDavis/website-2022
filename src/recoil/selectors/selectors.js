import { atom, selector } from 'recoil';
import { groupStateAtom } from '../atoms/groupAtom.js';
import { userStateAtom } from "../atoms/userAtom.js";

export const SetRSVPState = selector({
    // Note: with the new method that Omid added,
    // having the key for the selector is no longer necessary(?)
    // key: 'rsvp_status', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, response) => { 
        let userStateCopy = {...get(userStateAtom)}
        userStateCopy.rsvp_status = response; 
        set(userStateAtom, userStateCopy)
    }, 

});

export const SetUserGroupID = selector({
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, new_group_id) => { 
        let userStateCopy = {...get(userStateAtom)}
        userStateCopy.group_id = new_group_id; 
        set(userStateAtom, userStateCopy)
    }, 
});

export const SetUserPendingGroups = selector({
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, pending_groups) => { 
        let userStateCopy = {...get(userStateAtom)}
        userStateCopy.pending_groups = pending_groups; 
        set(userStateAtom, userStateCopy)
    }, 
});

export const SetUserPendingInvitations = selector({
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, pending_invitations) => { 
        let userStateCopy = {...get(userStateAtom)}
        userStateCopy.pending_invitations = pending_invitations; 
        set(userStateAtom, userStateCopy)
    }, 
});

export const updateUserPendingGroup = selector({
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, pending_group) => { 
        let userStateCopy = {...get(userStateAtom)}
        let pending_groups_arr = userStateCopy.pending_groups;
        pending_groups_arr.push(pending_group);
        userStateCopy.pending_groups = pending_groups_arr; 
        set(userStateAtom, userStateCopy)
    }, 
});

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