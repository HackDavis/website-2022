import React, {useState} from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";
import { groupStateAtom } from "../atoms/groupAtom.js";
import { SetRolesState } from "../selectors/setRolesState.js";
import { setRoles } from "../DBQueries/setRoles.js";

function SetRolesButton() {

    const user = useRecoilValue(userStateAtom);
    const group = useRecoilValue(groupStateAtom);
    const setRolesSelector = useSetRecoilState(SetRolesState);

    async function setRolesClick () {
        let hard_coded_new_roles = ["Front-End", "Back-End"];

        // error checking to make sure the admin is changing the group description
        if (user.email === group.contact_email) {
            console.log(hard_coded_new_roles);
            await setRoles(group.group_id, hard_coded_new_roles);
            setRolesSelector(hard_coded_new_roles);
        }
    }


    return  (
        <div>
            <button onClick={setRolesClick}>set Roles</button>
            {group ? <h1>{group.tags1}</h1> : <h1> no Roles </h1>}
        </div>
    );
}

export default SetRolesButton;