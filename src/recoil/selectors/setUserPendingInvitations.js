import { userStateAtom } from "../atoms/userAtom.js";
import { selector } from 'recoil';

export const SetUserPendingInvitations = selector({
    key:"SetUserPendingInvitations",
    get: ({get}) => ({...get(userStateAtom)}), 
    set: ({set, get}, pending_invitations) => { 
        let userStateCopy = {...get(userStateAtom)};
        userStateCopy.pending_invitations = pending_invitations; 
        set(userStateAtom, userStateCopy);
    }
});