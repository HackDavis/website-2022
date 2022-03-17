import React, {useState} from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";
import { SetUserDiscordID } from "../selectors/setUserDiscordID.js";
import { updateUserDiscordID } from "../DBQueries/updateUserDiscordID.js";

function UpdateUserDiscordIDButton() {
    const [text, setText] = useState("");

    const user = useRecoilValue(userStateAtom);
    const setUserDiscordID = useSetRecoilState(SetUserDiscordID);

    const onChange = (event) => {
        setText(event.target.value);
    };

    async function setUserDiscordIDClick () {
        const newDiscordID = await updateUserDiscordID(user.user_id, text);
        setUserDiscordID(newDiscordID);
    }


    return  (
        <div>
            <input type="text" value={text} maxLength = "37" onChange={onChange} />
            <div>
                {text.length}/37 characters
            </div>
            <button onClick={setUserDiscordIDClick}>updateUserDiscordID</button>
            {user ? <h1>{user.discord_id}</h1> : <h1> no user discord id</h1>}
        </div>
    );
}

export default UpdateUserDiscordIDButton;