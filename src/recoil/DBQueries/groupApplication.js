import { addPendingGroup } from "./addPendingGroup.js";
import { addPendingMember } from "./addPendingMember.js";

// user_id, user_name, email will be obtained from the User Recoil Atom
//how do we access group_id? (probably on the page))
// dont use 'name' as it is a reserved word; use 'user_name' instead
export async function groupApplication(user_id, user_name, email, group_id) {
    await addPendingGroup(user_id, group_id);
    let pending_members_map_copy = await addPendingMember(user_id, user_name, email, group_id);
    return pending_members_map_copy;
}