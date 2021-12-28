import { userStateAtom } from "../atoms/userAtom.js";
import { groupStateAtom } from "../atoms/groupAtom";
//import { SetUserGroupID, SetUserPendingGroups, SetUserPendingInvitations } from "../selectors/selectors.js"; 
import { deleteGroup } from '../DBQueries/deleteGroup.js';
import { useRecoilState } from 'recoil';
function DeleteGroupButton() {
    const [user, setUser] = useRecoilState(userStateAtom);
    const [group, setGroup] = useRecoilState(groupStateAtom);
    //const setUserGroupID = useSetRecoilState(SetUserGroupID);
    
    async function deleteGroupClick() {

        let new_pending_members = new Map();
        new_pending_members = {...group.pending_members};
        // for(let [key, value] of new_pending_members) {
        //     console.log(key);
        // };
        //console.log(group.group_id);
        await deleteGroup(group.group_id);

        //iterate through members of group
        //setUserGroupID: set group id of each member to []
        // for(let member of group.members) {
        //     console.log(`member: ${member}`);
        // };

        //iterate through pending_members of group
        //setUserPendingGroups: set group_id of each pending member to []
    }

    return (
        <div>
            <button onClick={deleteGroupClick}>delete group</button>
            {group ? <h1>{group.group_id}</h1> : <h1> group id not updated</h1>}
        </div>
    );
}

export default DeleteGroupButton;