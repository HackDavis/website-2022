import { deletePendingMember } from "./deletePendingMember.js"; 
import { deletePendingGroup } from "./deletePendingGroup.js"; 
import { getGroup } from "./getGroup.js";

// user_id, name, email will be obtained from the User Recoil Atom
//how do we access group_id? (probably on the page))
export async function denyGroupRequest(user_id, group_id, new_pending_members, new_pending_groups) {

    await deletePendingMember(group_id, new_pending_members); 
    await deletePendingGroup(user_id, new_pending_groups); 
}