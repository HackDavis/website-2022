import React, {useState} from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";
import { groupStateAtom } from "../atoms/groupAtom.js";
import { SetGroupName } from "../selectors/setGroupName.js";
import { updateGroupName } from "../DBQueries/updateGroupName.js";

function UpdateGroupNameButton() {
    const [text, setText] = useState("");

    const user = useRecoilValue(userStateAtom);
    const group = useRecoilValue(groupStateAtom);
    const setGroupName = useSetRecoilState(SetGroupName);

    const onChange = (event) => {
        setText(event.target.value);
    };

    async function setGroupNameClick () {
        // error checking to make sure the admin is changing the group name
        if (user.email === group.contact_email) {
            console.log(text);
            const newName = await updateGroupName(group.group_id, text);
            setGroupName(newName);
        }
    }


    return  (
        <div>
            <input type="text" value={text} maxLength = "20" onChange={onChange} />
            <div>
                {text.length}/20 characters
            </div>
            <button onClick={setGroupNameClick}>updateGroupName</button>
            {group ? <h1>{group.group_name}</h1> : <h1> no group name</h1>}
        </div>
    );
}

export default UpdateGroupNameButton;