import { useRecoilState} from 'recoil';

import React from "react";
import { getGroup } from '../DBQueries/getGroup.js';
import { groupStateAtom } from "../../recoil/atoms/groupAtom";

export function GetGroupButton() {
    const [group, setGroup] = useRecoilState(groupStateAtom);
    // Calls the query function and updates the recoil state 
    async function setGroupState () {
        // user hardcoded for testing
<<<<<<< HEAD:src/recoil/testButtons/GetGroupButton.js
        const groupData = await getGroup("xPN9lsrl3ZjKOxDQuGig");
        console.log(groupData); 
=======
        const groupData = await getGroup("Zs7bdphkPOTiOjk61RKg");
>>>>>>> 7b62b0a0bef4ffe3f993632cbd67c20d482d1474:src/back-end/testButtons/GetGroupButton.js
        setGroup(groupData);
    }
    return (
        <div>
            <button onClick={setGroupState}> getGroup Button</button>
            {group ? <h1>{group.group_id}</h1> : <h1>User's group does not exist</h1>}
        </div>
    );
}
