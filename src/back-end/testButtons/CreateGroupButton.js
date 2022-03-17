import React, {useState} from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../../recoil/atoms/userAtom.js";
import { groupStateAtom } from "../../recoil/atoms/groupAtom";
import {SetUserGroupID} from "../../recoil/selectors/setUserGroupID";
import {SetUserPendingGroups} from "../../recoil/selectors/setUserPendingGroups";
import { SetUserPendingInvitations } from "../../recoil/selectors/setUserPendingInvitations.js";
import { createGroup } from '../DBQueries/createGroup.js';

export function CreateGroupButton() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    
    const [user, setUser] = useRecoilState(userStateAtom);
    const [group, setGroup] = useRecoilState(groupStateAtom);

    const setUserGroupID = useSetRecoilState(SetUserGroupID);
    const setUserPendingGroups = useSetRecoilState(SetUserPendingGroups);
    const setUserPendingInvitations = useSetRecoilState(SetUserPendingInvitations);

    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeDesc = (event) => {
        setDesc(event.target.value);
    };

    async function createGroupClick() {

        const newGroup = await createGroup(user.email, user.user_id, name, desc);
        if (newGroup == null) {
            console.log("createGroup Error: user is already in a group");
        } else {
            // setRSVP for front-end Recoil atom
            setGroup(newGroup);
            setUserGroupID(newGroup.group_id);
            setUserPendingGroups([]);
            setUserPendingInvitations([]);
        }
    }
    
    return (
        <div>
            <div>
                Group Name: <br />
                <input type="text" value={name} maxLength = "20" onChange={changeName}></input>
            </div>
            <div>
                {name.length}/20 characters
            </div>
            <div>
                Group Description: <br />
                <input type="text" value={desc} maxLength = "250" onChange={changeDesc}></input>
            </div>
            <div>
                {desc.length}/250 characters
            </div>
            <button onClick={createGroupClick}>createGroup</button>
            {user ? <h1>{user.group_id}</h1> : <h1>createGroup not called yet</h1>}
        </div>
    );
}
