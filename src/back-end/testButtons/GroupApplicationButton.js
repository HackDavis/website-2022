import React, {useState} from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../../recoil/atoms/userAtom.js";
import { groupStateAtom } from "../../recoil/atoms/groupAtom";
import { updateUserPendingGroup } from "../../recoil/selectors/updateUserPendingGroup";
import {updateGroupPendingMember} from "../../recoil/selectors/updateGroupPendingMember";
import { groupApplication } from "../DBQueries/groupApplication.js";

function GroupApplicationButton() {
    const [reason, setReason] = useState("");

    const onChange = (event) => {
        setReason(event.target.value);
    };

    const [user, setUser] = useRecoilState(userStateAtom);
    const [group, setGroup] = useRecoilState(groupStateAtom);
    const setUpdateUserPendingGroup = useSetRecoilState(updateUserPendingGroup);
    const setUpdateGroupPendingMember = useSetRecoilState(updateGroupPendingMember);
    
    async function groupApplicationClick() {
<<<<<<< HEAD:src/recoil/testButtons/GroupApplicationButton.js
        let hardcode_group_id = "xPN9lsrl3ZjKOxDQuGig";
        //TODO: Change hardcode_group_id to group.group_id after testing
        console.log("old group:", group);
        console.log("old user:", user);
        let pending_members_map_copy = await groupApplication(user.user_id, hardcode_group_id, reason);
=======
        let hardcode_group_id = "pyYivJHs7UIyNPvLYvrc";
        let pending_members_map_copy = await groupApplication(user.user_id, hardcode_group_id);
>>>>>>> 7b62b0a0bef4ffe3f993632cbd67c20d482d1474:src/back-end/testButtons/GroupApplicationButton.js
        if (pending_members_map_copy != null) {
    
            // setRSVP for front-end Recoil atom=
            setUpdateUserPendingGroup(hardcode_group_id);
            setUpdateGroupPendingMember(pending_members_map_copy);
        }
    }
    
    return (
        <div>
            <input type="text" value={reason} onChange={onChange} />
            <button onClick={groupApplicationClick}>groupApplication</button>
            {user ? <h1>{user.pending_groups}</h1> : <h1> user pending group not set</h1>}
            {/* {group ? <h1>{group.pending_members}</h1> : <h1> group pending members not set</h1>} */}
        </div>
    );
}

export default GroupApplicationButton; 