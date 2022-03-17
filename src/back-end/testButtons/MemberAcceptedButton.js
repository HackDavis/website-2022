import React from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {userStateAtom} from "../../recoil/atoms/userAtom";
import { groupStateAtom } from "../../recoil/atoms/groupAtom";
import { memberAccepted } from "../DBQueries/memberAccepted";
import { SetUserGroupID } from "../../recoil/selectors/setUserGroupID";
import { SetGroupMembers } from "../../recoil/selectors/setGroupMembers";
import { updateGroupPendingMember } from "../../recoil/selectors/updateGroupPendingMember";
import { SetUserPendingGroups } from "../../recoil/selectors/setUserPendingGroups";

export function MemberAcceptedButton () {
    const user = useRecoilValue(userStateAtom);
    const group = useRecoilValue(groupStateAtom);
    const setUserGroupID = useSetRecoilState(SetUserGroupID);
    const setGroupMembers = useSetRecoilState(SetGroupMembers);
    const setGroupPendingMember = useSetRecoilState(updateGroupPendingMember);
    const setUserPendingGroups = useSetRecoilState(SetUserPendingGroups);

    async function memberAcceptClick() {
        const {groupID, newMemberMap, newPendingMemberMap, newPendingGroup} = await memberAccepted(user.user_id, group.group_id);
        setUserGroupID(groupID);
        setGroupMembers(newMemberMap);
        setGroupPendingMember(newPendingMemberMap);
        setUserPendingGroups(newPendingGroup);
    }

    return (
        <div>
            <button onClick={memberAcceptClick}>MemberAcceptedButton</button>
            {user ? <h1>userGroupID:{user.group_id}</h1> : <h1>no user</h1> }
            {user? <h1>userPendingGroups: {JSON.stringify(user.pending_groups)}</h1>: <h1>no user</h1>} 
            {group ? <h1>groupMembers: {JSON.stringify(group.members)}</h1>: <h1>no group</h1>}  
            {group ? <h1>groupPendingMembers: {JSON.stringify(group.pending_members)}</h1>: <h1>no group</h1>}     
        </div>
    );
}