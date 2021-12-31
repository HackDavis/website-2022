import React from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";
import { groupStateAtom } from "../atoms/groupAtom";
import { DeletePendingGroup } from "../selectors/deletePendingGroup";
import {DeletePendingMember} from "../selectors/deletePendingMember";
import { denyGroupRequest } from "../DBQueries/denyGroupRequest.js"; 
import { getGroup } from "../DBQueries/getGroup.js";

function DenyGroupRequestButton() {
    const [user, setUser] = useRecoilState(userStateAtom);
    const [group, setGroup] = useRecoilState(groupStateAtom);
    const setDeletePendingGroup = useSetRecoilState(DeletePendingGroup);
    const setDeletePendingMember = useSetRecoilState(DeletePendingMember);

    async function denyGroupRequestClick() { 
        console.log(await getGroup(group.group_id));
        // // local updates 
        // ---------------
        // This section has been moved to deletePendingMember and deletePendingGroup DB Query 
        //
        // let new_pending_members = {...group.pending_members}; // must spread because this is an object of arrays - 
        //                                                       // otherwise you do a shallow copy of nested objects 
        // delete new_pending_members[user.user_id]; 
        // let new_pending_groups = [...user.pending_groups]; // done for the same reason as above (we don't want a read-only copy) 

        // // splice requires the index of the group_id you are searching for
        // // so try doing group.indexOf(group_id) ?
        // let groupIndex = new_pending_groups.indexOf(group.group_id);
        // new_pending_groups.splice(groupIndex, 1); 
        
        // console.log("new pending_groups and pending_members done"); 
        // ------------
        //TODO: Test if this method of extracting variables actually works
        let temp_user_id = "xKuRoQEUJzZ8MtJ9MkiEoWMYOj72";
        const {newPendingMemberMap, newPendingGroupMap} = await denyGroupRequest(temp_user_id, group.group_id); 

        // front-end Recoil atom update 
        setDeletePendingMember(newPendingMemberMap); 
        setDeletePendingGroup(newPendingGroupMap); 
        console.log(await getGroup(group.group_id));
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