import React, {useState} from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userStateAtom } from "../atoms/userAtom.js";
import { groupStateAtom } from "../atoms/groupAtom.js";
import { SetTagsState } from "../selectors/setTagsState.js";
import { setTags } from "../DBQueries/setTags.js";

function SetTagsButton() {

    const user = useRecoilValue(userStateAtom);
    const group = useRecoilValue(groupStateAtom);
    const setTagsSelector = useSetRecoilState(SetTagsState);

    async function setTagsClick () {
        let hard_coded_new_tags = ["React", "HTML"];

        // error checking to make sure the admin is changing the group description
        if (user.email === group.contact_email) {
            console.log(hard_coded_new_tags);
            await setTags(group.group_id, hard_coded_new_tags);
            setTagsSelector(hard_coded_new_tags);
        }
    }


    return  (
        <div>
            <button onClick={setTagsClick}>set Tags</button>
            {group ? <h1>{group.tags2}</h1> : <h1> no Tags </h1>}
        </div>
    );
}

export default SetTagsButton;