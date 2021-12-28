import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";
import { getUser } from "./getUser.js";

// deletes group_id from users's pending_invitations
// group calls this function
// takes user_id and group_id as input
// this group no longer exists in user's pending_invitations

export async function deleteMultiplePendingInvitations(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-users", user_id);
    
    try {
         console.log(user_id);
        let userCopy = await getUser(user_id);
        let pending_invitations_copy = {...userCopy.pending_invitations};
        delete pending_invitations_copy[group_id];
        
        await updateDoc(docRef, {
            pending_invitations: pending_invitations_copy,
        });
        
    } catch(e) {
        console.log("error with deleteMultiplePendingInvitations: ", e);
    }
}