import React, {useState} from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../../recoil/atoms/userAtom.js";
import { groupStateAtom } from "../../recoil/atoms/groupAtom.js";
import { SetGroupDescription } from "../../recoil/selectors/setGroupDesc.js";
import { updateGroupDesc } from "../DBQueries/updateGroupDesc.js";

function UpdateGroupDescButton() {
    const [text, setText] = useState("");

    const user = useRecoilValue(userStateAtom);
    const group = useRecoilValue(groupStateAtom);
    const setGroupDescription = useSetRecoilState(SetGroupDescription);

    const onChange = (event) => {
        setText(event.target.value);
    };

    async function setGroupDescClick () {
        // error checking to make sure the admin is changing the group description
        if (user.email === group.contact_email) {
            // console.log(text);
            // console.log(text.length);
            const newdesc = await updateGroupDesc(group.group_id, text);
            setGroupDescription(newdesc);
        }
    }


    return  (
        <div>
            <input type="text" value={text} maxLength = "250" onChange={onChange} />
            <div>
                {text.length}/250 characters
            </div>
            <button onClick={setGroupDescClick}>updateGroupDesc</button>
            {group ? <h1>{group.description}</h1> : <h1> no group description</h1>}
        </div>
    );
}

export default UpdateGroupDescButton;