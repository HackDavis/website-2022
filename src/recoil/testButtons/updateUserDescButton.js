import React, {useState} from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";
import { SetUserDescription } from "../selectors/setUserDesc.js";
import { updateUserDesc } from "../DBQueries/updateUserDesc.js";

function UpdateUserDescButton() {
    const [text, setText] = useState("");

    const user = useRecoilValue(userStateAtom);
    const setUserDescription = useSetRecoilState(SetUserDescription);

    const onChange = (event) => {
        setText(event.target.value);
    };

    async function setUserDescClick () {
        const newdesc = await updateUserDesc(user.user_id, text);
        setUserDescription(newdesc);
    }


    return  (
        <div>
            <input type="text" value={text} maxLength = "250" onChange={onChange} />
            <div>
                {text.length}/250 characters
            </div>
            <button onClick={setUserDescClick}>updateUserDesc</button>
            {user ? <h1>{user.description}</h1> : <h1> no user description</h1>}
        </div>
    );
}

export default UpdateUserDescButton;