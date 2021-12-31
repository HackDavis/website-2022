 
import { getGroup } from "./getGroup.js";
import { deleteUserGroupID } from "./deleteUserGroupID.js";
import { doc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";

//Purpose: delete's a current member of group, can only be called by group leader who is currently logged in
//Input: user_id to be deleted and group_id
//How it works: user is removed from the group's members array and the group's group_is id removed from the user's group_id field
//Expected Result: the user_id is no longer present in the group's member array and the user's group_id field is blank
// returns new member array to update the UI using selectors
export async function deleteActiveMember(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-groups", group_id);
    console.log(user_id);
    // to remove user_id from members array
    let group_copy = await getGroup(group_id);
    let group_members_copy = group_copy.members;
    let groupIndex = group_members_copy.indexOf(user_id);
    group_members_copy.splice(groupIndex, 1);
    console.log(group_members_copy);
    await updateDoc(docRef, {
        members: group_members_copy,
    });
    

    // setting user's group_id to ""
    await deleteUserGroupID(user_id); 

    return group_members_copy;
}