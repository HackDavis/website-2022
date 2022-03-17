import React from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../../recoil/atoms/userAtom.js";
import { groupStateAtom } from "../../recoil/atoms/groupAtom";
import { DeletePendingGroup } from "../../recoil/selectors/deletePendingGroup";
import {DeletePendingMember} from "../../recoil/selectors/deletePendingMember";
import { denyGroupRequest } from "../DBQueries/denyGroupRequest.js"; 
import { getGroup } from "../DBQueries/getGroup.js";

function DenyGroupRequestButton() {
    const [user, setUser] = useRecoilState(userStateAtom);
    const [group, setGroup] = useRecoilState(groupStateAtom);
    const setDeletePendingGroup = useSetRecoilState(DeletePendingGroup);
    const setDeletePendingMember = useSetRecoilState(DeletePendingMember);

    async function denyGroupRequestClick() { 
        let temp_user_id = "xKuRoQEUJzZ8MtJ9MkiEoWMYOj72";
        const {newPendingMemberMap, newPendingGroupMap} = await denyGroupRequest(temp_user_id, group.group_id); 
        // front-end Recoil atom update 
        setDeletePendingMember(newPendingMemberMap); 
        setDeletePendingGroup(newPendingGroupMap); 
    }; 
    
    return (
        <div>
            <button onClick={denyGroupRequestClick}>denyGroupRequest</button>
            {user ? <h1>{user.pending_groups}</h1> : <h1> user pending group not set</h1>} 
            {/* {group ? <h1>{group.pending_members}</h1> : <h1> group pending members not set</h1>} */} 
        </div>
    );
}

export default DenyGroupRequestButton; 