import { groupStateAtom } from "../../recoil/atoms/groupAtom";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { SetUserGroupID } from "../../recoil/selectors/setUserGroupID.js";
import { deleteActiveMember } from "../DBQueries/deleteActiveMember.js";
<<<<<<< HEAD:src/recoil/testButtons/DeleteActiveMemberButton.js
import { SetGroupMembers } from "../selectors/setGroupMembers";
=======
import { SetGroupMembers } from "../../recoil/selectors/setGroupMembers";
>>>>>>> 7b62b0a0bef4ffe3f993632cbd67c20d482d1474:src/back-end/testButtons/DeleteActiveMemberButton.js

function DeleteActiveMemberButton() {
    const [group, setGroup] = useRecoilState(groupStateAtom);
    const setUserGroupID = useSetRecoilState(SetUserGroupID);
    const setGroupMembers = useSetRecoilState(SetGroupMembers);
    
    async function deleteActiveMemberClick() {
        
        let user_id_to_delete = document.getElementById("user_id_to_delete").value;
        let new_group_members = await deleteActiveMember(user_id_to_delete, group.group_id);

        setUserGroupID("");
        setGroupMembers(new_group_members);
    }


    return (
        <div>
            <div>
                {/* TODO: need to remove manual inputting of user_id once we get to the dashboard */}
               user_id to be deleted:
               <br />
               <input type="text" id="user_id_to_delete"></input> 
            </div>
            <button onClick={deleteActiveMemberClick}>delete active member</button>
            {group ? <h1>{group.group_id}</h1> : <h1> group members not updated</h1>}
        </div>
    );
}

export default DeleteActiveMemberButton;