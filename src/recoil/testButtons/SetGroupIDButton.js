import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";
import { SetUserGroupID } from "../selectors/setUserGroupID.js";
import { setGroupID } from "../DBQueries/setGroupID.js";

export function SetGroupIDButton() {
    const user = useRecoilValue(userStateAtom);
    const setUserGroupID = useSetRecoilState(SetUserGroupID);

    async function setGroupIDClick () {
        const newGroupID = await setGroupID(user.user_id, "testingGroupID");
        setUserGroupID(newGroupID);
    }

    return  (
        <div>
            <button onClick={setGroupIDClick}>setGroupID</button>
            {user ? <h1>{user.group_id}</h1> : <h1> no user group id</h1>}
        </div>
    );
}