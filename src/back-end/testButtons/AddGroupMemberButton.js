import React from "react";
import { useSetRecoilState, useRecoilValue} from 'recoil';
import { groupStateAtom } from "../../recoil/atoms/groupAtom";
import { SetGroupMembers } from "../../recoil/selectors/setGroupMembers.js";
import { addGroupMember } from "../DBQueries/addGroupMember.js";

export function AddGroupMemberButton () {
    const groupData = useRecoilValue(groupStateAtom);
    const updateGroupMembers = useSetRecoilState(SetGroupMembers);

    async function addGroupMemberClick (user_id, group_id) {
        // Hardcoded user_id and group_id for testing purposes
        const newGroupMembers = await addGroupMember("cYBdD6I5aMguLCUYOBOOZeq95Vi2","Zs7bdphkPOTiOjk61RKg");
        // Update member field of group state atom
        updateGroupMembers(newGroupMembers);
    }

    return (
        <div>
            <button onClick={addGroupMemberClick}>AddGroupMemberButton</button>
            {groupData ? <h1>{JSON.stringify(groupData.members)}</h1> : <h1> group data does not exist</h1>}
        </div>
    );
}