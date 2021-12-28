import React from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";
import { groupStateAtom } from "../atoms/groupAtom";
import { updateUserPendingGroup } from "../selectors/updateUserPendingGroup";
import {updateGroupPendingMember} from "../selectors/updateGroupPendingMember";
import { groupApplication } from "../DBQueries/groupApplication.js";

function GroupApplicationButton() {
    const [user, setUser] = useRecoilState(userStateAtom);
    const [group, setGroup] = useRecoilState(groupStateAtom);
    const setUpdateUserPendingGroup = useSetRecoilState(updateUserPendingGroup);
    const setUpdateGroupPendingMember = useSetRecoilState(updateGroupPendingMember);
    
    async function groupApplicationClick() {
        let hardcode_group_id = "C5VaLwp0TjZCj2erPcaF";
        //TODO: Change hardcode_group_id to group.group_id after testing
        console.log("old group:", group);
        console.log("old user:", user);
        let pending_members_map_copy = await groupApplication(user.user_id, user.name, user.email, hardcode_group_id);
        console.log(pending_members_map_copy);

        // setRSVP for front-end Recoil atom=
        setUpdateUserPendingGroup(hardcode_group_id);
        setUpdateGroupPendingMember(pending_members_map_copy);
        console.log("New group:", group);
        console.log("User:", user);
    }
    
    return (
        <div>
            <button onClick={groupApplicationClick}>groupApplication</button>
            {user ? <h1>{user.pending_groups}</h1> : <h1> user pending group not set</h1>}
            {/* {group ? <h1>{group.pending_members}</h1> : <h1> group pending members not set</h1>} */}
        </div>
    );
}

export default GroupApplicationButton; 