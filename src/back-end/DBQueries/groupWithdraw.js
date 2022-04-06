import { getUser } from "./getUser.js";
import { getGroup } from "./getGroup.js";
import { deleteUserPendingGroup } from "./deleteUserPendingGroup.js";
import { deletePendingMember } from "./deletePendingMember.js";

// user withdraws their application to a group
export async function groupWithdraw(user_id, group_id) {
    
    function findUser(pending_members) {
        return pending_members == user_id;
    }

    try {
        let user = await getUser(user_id);
        let group = await getGroup(group_id);
        // console.log(typeof(group.pending_members));
        // console.log(group.pending_members);

        const keys = Object.keys(group.pending_members);
        const map = new Map();
        for(let i = 0; i < keys.length; i++){
            //inserting new key value pair inside map
            map.set(keys[i], group.pending_members[keys[i]]);
        };
        // console.log("map: ", map);

        
        if (map.get(user_id) === undefined) {
            console.error("Error: user did not apply to this group");
            return null;
        } else {
            // delete this group from user's pending groups
            await deleteUserPendingGroup(user_id, group_id);
            // delete this user from group's pending members
            let pending_members_map_copy = await deletePendingMember(user_id, group_id);
            return pending_members_map_copy;
        }
    } catch (e) {
        console.error("error with group Withdraw handler", e);
    }
}