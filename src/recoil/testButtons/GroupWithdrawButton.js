import React from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";
import { groupStateAtom } from "../atoms/groupAtom";
import { SetUserPendingGroups } from "../selectors/setUserPendingGroups";
import { updateGroupPendingMember } from "../selectors/updateGroupPendingMember";
import { groupWithdraw } from "../DBQueries/groupWithdraw.js";

function GroupWithdrawButton() {
    const [user, setUser] = useRecoilState(userStateAtom);
    const [group, setGroup] = useRecoilState(groupStateAtom);
    const setSetUserPendingGroup = useSetRecoilState(SetUserPendingGroups);
    const setUpdateGroupPendingMember = useSetRecoilState(updateGroupPendingMember);
    
    async function groupWithdrawClick() {
        let hardcode_group_id = "umw6kVQBPPQI0pRByIYg";
        //TODO: Change hardcode_group_id to group.group_id after testing
        console.log("old group:", group);
        console.log("old user:", user);
        let pending_members_map_copy = await groupWithdraw(user.user_id, hardcode_group_id);
        if (pending_members_map_copy != null) {
            console.log(pending_members_map_copy);
    
            let pending_groups_copy = [...user.pending_groups];

        //  let groupIndex = pending_groups_copy.indexOf(group_id);
        //  pending_groups_copy.splice(groupIndex, 1);

            pending_groups_copy.splice(pending_groups_copy.indexOf(hardcode_group_id), 1);
            setSetUserPendingGroup(pending_groups_copy);
            setUpdateGroupPendingMember(pending_members_map_copy);
            console.log("New group:", group);
            console.log("User:", user);
        }
    }
    
    return (
        <div>
            <button onClick={groupWithdrawClick}> group withdraw </button>
            {user ? <h1>{user.pending_groups}</h1> : <h1> user pending group not set</h1>}
            {/* {group ? <h1>{group.pending_members}</h1> : <h1> group pending members not set</h1>} */}
        </div>
    );
}

export default GroupWithdrawButton; 