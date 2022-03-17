import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../dbConfig.js";
import { getUser } from "./getUser.js";

// Purpose: deletes group_id from users's pending_invitations
// How it works: removes group id from user's pending-invitation object copy and then copies the changes to firebase
// Input: takes user_id and group_id as input
// Expected result: this group no longer exists in user's pending_invitations

export async function deleteUserPendingInvitation(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-users", user_id);
    
    try {
        let userCopy = await getUser(user_id);
        let pending_invitations_copy = {...userCopy.pending_invitations};
        delete pending_invitations_copy[group_id];
        
        await updateDoc(docRef, {
            pending_invitations: pending_invitations_copy
        });
        
    } catch(e) {
        console.log("error with deleteMultiplePendingInvitations: ", e);
    }
}