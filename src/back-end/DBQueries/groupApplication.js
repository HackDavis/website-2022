import { addPendingGroup } from "./addPendingGroup.js";
import { addPendingMember } from "./addPendingMember.js";
import { getUser } from "./getUser.js";
import { getGroup } from "./getGroup.js";

// user_id, user_name, email will be obtained from the User Recoil Atom, user's reason for applying
//how do we access group_id? (probably on the page))
// dont use 'name' as it is a reserved word; use 'user_name' instead
export async function groupApplication(user_id, group_id, reason) {

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
        // console.log("map get: ", map.get(user_id));

        // error checking:
        // if user is in a group already
        // Note: Ideally these error cases should not be possible on the front-end if we remove the buttons if the user matches any of these cases
        if (user.group_id != "") {
            console.error("Error: user already in a group");
            return null;
        // if user has already applied to this group before (GROUP APPLICATION !=)
        } else if (map.get(user_id) !== undefined) {
            console.error("Error: user already applied to this group");
            return null;
        } else {
            await addPendingGroup(user_id, group_id);
            let pending_members_map_copy = await addPendingMember(user_id, group_id, reason);
            return pending_members_map_copy;
        }
    } catch (e) {
        console.error("error with groupApplication handler: ", e);
    }
}