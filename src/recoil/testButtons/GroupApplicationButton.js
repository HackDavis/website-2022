import React from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";
import { groupStateAtom } from "../atoms/groupAtom";
import { updateUserPendingGroup } from "../selectors/selectors.js";
import { groupApplication } from "../DBQueries/groupApplication.js";

function GroupApplicationButton() {
    const [user, setUser] = useRecoilState(userStateAtom);
    const [group, setGroup] = useRecoilState(groupStateAtom);

    async function groupApplicationClick() {
        await groupApplication(user.user_id, user.name, user.email, group.group_id);

        // setRSVP for front-end Recoil atom
        updateUserPendingGroup(group.group_id);
        updateGroupPendingMember(user.user_id, user.name, user.email);
    }
    
    return (
        <div>
            <button onClick={groupApplicationClick}>groupApplication</button>
            {user ? <h1>{user.pending_groups}</h1> : <h1> user pending group not set</h1>}
            {group ? <h1>{group.pending_members}</h1> : <h1> group pending members not set</h1>}
        </div>
    );
}

export default GroupApplicationButton; 