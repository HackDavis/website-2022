import { setGroupID } from "./setGroupID";
import { addGroupMember } from "./addGroupMember";
import { deletePendingMember } from "./deletePendingMember";
import { resetPendingGroups} from "./resetPendingGroups";


// Handler to call setGroupID, addGroupMember, deletePendingMember, and resetPendingGroups
// Input: userID(string) and groupID(string)

export async function memberAccepted(user_id, group_id) {

    // note: can restructure later if we're making too many calls
    const groupID = await setGroupID(user_id, group_id);
    const newMemberMap = await addGroupMember(user_id, group_id);
    const newPendingMemberMap = await deletePendingMember(user_id, group_id);
    const newPendingGroup = await resetPendingGroups(user_id);
    return {groupID, newMemberMap, newPendingMemberMap, newPendingGroup};
}