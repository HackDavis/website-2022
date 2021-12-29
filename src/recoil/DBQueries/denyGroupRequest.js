import { deletePendingMember } from "./deletePendingMember.js"; 
import { deletePendingGroup } from "./deletePendingGroup.js"; 
import { getGroup } from "./getGroup.js";

//Purpose: deny group request by user in pending_members
//How it works: need to remove the member from group's pending_members object and remove the group from the user's pending_invitation object
//Input: takes user_id, group_id, group's new pending members map (without user), user's new pending invitations map (without group)
export async function denyGroupRequest(user_id, group_id, new_pending_members, new_pending_groups) {

    await deletePendingMember(group_id, new_pending_members); 
    await deletePendingGroup(user_id, new_pending_groups); 
}