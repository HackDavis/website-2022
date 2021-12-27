import React from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";
import { groupStateAtom } from "../atoms/groupAtom.js";
import {SetUserGroupID} from "../selectors/setUserGroupID";
import {SetUserPendingGroups} from "../selectors/setUserPendingGroups"
import { SetUserPendingInvitations } from "../selectors/setUserPendingInvitations.js";
import { createGroup } from '../DBQueries/createGroup.js';

export function CreateGroupButton() {
    const [user, setUser] = useRecoilState(userStateAtom);
    const [group, setGroup] = useRecoilState(groupStateAtom);
    const setUserGroupID = useSetRecoilState(SetUserGroupID);
    const setUserPendingGroups = useSetRecoilState(SetUserPendingGroups);
    const setUserPendingInvitations = useSetRecoilState(SetUserPendingInvitations);

    async function createGroupClick() {
        // note: error checking here if group_id is blank or something
        const newGroupID = document.getElementById("inputGroupID").value;
        const newGroupDesc = document.getElementById("inputGroupDesc").value;

        const newGroup = await createGroup(user.email, newGroupID, user.user_id, newGroupDesc);
        // setRSVP for front-end Recoil atom
        setGroup(newGroup);
        setUserGroupID(newGroupID);
        setUserPendingGroups([]);
        setUserPendingInvitations([]);
    }
    
    return (
        <div>
            <div>
                Group ID: <br />
                <input type="text" id="inputGroupID"></input>
            </div>
            <div>
                Group Description: <br />
                <input type="text" id="inputGroupDesc"></input>
            </div>
            <button onClick={createGroupClick}>createGroup</button>
            {user ? <h1>{user.group_id}</h1> : <h1>createGroup not called yet</h1>}
        </div>
    );
}