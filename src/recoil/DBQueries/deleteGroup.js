import { doc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig";
import { getGroup } from "./getGroup";
//import { getUser } from "./getUser";
import { deleteMultiplePendingMembers } from "./deleteMultiplePendingMembers";

//Purpose: Deletes a group
//Input: group_id (string)
// 1. for loop: calls deleteMultiplePendingMembers() -> takes user_id, group_id in every loop
//          update's firebase doc in func
// 2. for loop: calls deleteMultiplePendingGroups() -> takes user_id, group_id
// 3. for loop: calls deleteMultipleMembers() -> takes user_id, group_id [BIT DIFF THAN THE OTHER TWO]
// 4. deleteDoc -> delete's group


export async function deleteGroup(groupID) {
    
    try {
        console.log("dbqueries");
        let groupDoc = await getGroup(groupID);

        let pending_members_map  = groupDoc.pending_members;
        let pending_invitations_map = groupDoc.pending_invitations;
        let members_arr = groupDoc.members;

        let keys_p_mem = Object.keys(pending_members_map);
        console.log(keys_p_mem);

        for(let id of keys_p_mem) {
            console.log(id);
            // deleteMultiplePendingMembers(id, groupID);
        }

        let keys_p_invitations = Object.keys(pending_invitations_map);
        console.log(keys_p_invitations);

        for(let id of keys_p_invitations) {
            console.log(id);
            //deleteMultiplePendingInvitations(id, groupID);
                // userCopy await getUser(id)
                //splice from userCopy.pending_invitations
        }

        let keys_mem = Object.keys(members_arr);
        console.log(keys_mem);

        for(let id of keys_mem) {
            console.log(id);
            //deleteMultipleMembers(id, groupID);
                // userCopy await getUser(id)
                // userCopy.group_id = null
        }

        // let userCopy = {};
        // let groupIndex = 0;        
        
        // async function deleteGroupIds(){
        //     console.log('Start');
        //     for (let id of keys) {
        //         console.log(id);
        //         userCopy =  await getUser(key);
        //         groupIndex = userCopy.pending_groups.indexOf(groupID);
        //         userCopy.pending_groups.splice(groupIndex, 1);
        //         console.log(userCopy);
        //     };
        //     console.log("End");
        // };

        // Object.keys(pending_members_map).forEach(async key => {
        //     console.log(key);
        //     userCopy =  await getUser(key);
        //     console.log(userCopy);
        //     groupIndex = userCopy.pending_groups.indexOf(groupID);
        //     userCopy.pending_groups.splice(groupIndex, 1);
        //     console.log(userCopy);
            
        // });


    }
    catch(e) {
        console.log(`error: ${e}`);
    }
    
}