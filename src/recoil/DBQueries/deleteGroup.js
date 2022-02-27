import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig";
import { getGroup } from "./getGroup";
import { deleteUserPendingGroup } from "./deleteUserPendingGroup";
import { getUser } from "./getUser";
import { deleteUserPendingInvitation } from "./deleteUserPendingInvitation";
import { deleteUserGroupID } from "./deleteUserGroupID";

//Purpose: Deletes a group
//Input: group_id (string)
// How it works: (4 steps)
// 1. for loop: calls deleteUserPendingGroup() -> takes user_id, group_id in every loop
//          update's firebase doc in func, deleting each user's pending_groups
// 2. for loop: calls deleteUserPendingInvitation() -> takes user_id, group_id, 
//          deleting the group in each user's pending_invitations
// 3. for loop: calls deleteUserGroupID() -> takes user_id, group_id [BIT DIFF THAN THE OTHER TWO], 
//          for the ACTUAL members of the group, delete this group_id for each user
// 4. deleteDoc -> delete's group
// Expected Result: group_id deleted from all users that were in
//  1. pending_members
//  2. pending_invitations
//  3. members

export async function deleteGroup(groupID) {
    //group id: C5VaLwp0TjZCj2erPcaF
    
    try {
        console.log("dbqueries");
        let groupDoc = await getGroup(groupID);
        let pending_members_map  = groupDoc.pending_members;
        let pending_invitations_map = groupDoc.pending_invitations;
        let members_arr = groupDoc.members;

        // 1. removing group_id from all user's pending_groups
        let keys_p_mem = Object.keys(pending_members_map);
        console.log("initial pending_members:", keys_p_mem);
        for(let id of keys_p_mem) {
            await deleteUserPendingGroup(id, groupID);
        }

        //2. removing group_id from all user's pending_invitations
        let keys_p_invitations = Object.keys(pending_invitations_map);
        console.log("initial pending_invitations:", keys_p_invitations);
        for(let id of keys_p_invitations) {
            await deleteUserPendingInvitation (id, groupID);
        }

        //3. removing group_id from all members of the group
        console.log("initial members:", members_arr);
        for(let id of members_arr) {
            await deleteUserGroupID(id);
        }

        //4. actual deletion of group
        await deleteDoc(doc(dbConfig, "2022-groups", groupID));

    }
    catch(e) {
        console.log(`error in deleteGroup: ${e}`);
    }
    
}