import { userStateAtom } from "../atoms/userAtom.js";
import { groupStateAtom } from "../atoms/groupAtom"; 
import { deleteGroup } from '../DBQueries/deleteGroup.js';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { SetUserGroupID } from "../selectors/setUserGroupID.js";

function DeleteGroupButton() {
    const [user, setUser] = useRecoilState(userStateAtom);
    const [group, setGroup] = useRecoilState(groupStateAtom);
    const setUserGroupID = useSetRecoilState(SetUserGroupID);
    //const setUserGroupID = useSetRecoilState(SetUserGroupID);
    
    async function deleteGroupClick() {
        await deleteGroup(group.group_id);

        //assuming the user who is a member(or owner) of the group can delete group
        setGroup([]);
        setUserGroupID("");

}

    return (
        <div>
            <button onClick={deleteGroupClick}>delete group</button>
            {group ? <h1>{group.group_id}</h1> : <h1> group id not updated</h1>}
        </div>
    );
}

export default DeleteGroupButton;