import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig} from "../../db/dbConfig.js";

export async function createGroup(email, newGroupID, user_id) {
    // first, create a group locally
    var newGroup = {
        contact_email: email,
        description: "New Group Test Again!",
        group_id: newGroupID,
        members: [user_id],
        pending_members: [],
        tags1: [],
        tags2: [],
    };

    // add this group to the firebase
    await setDoc(doc(dbConfig, "2022-groups", newGroupID), newGroup);

    // update the current user's group on firebase
    const docRef2 = doc(dbConfig, "2022-users", user_id);
    await updateDoc(docRef2, {
        group_id: newGroupID,
        pending_groups: [],
    });

    return newGroup;
}

// function CreateGroupButton({}) {
//     const [user, setUser] = useRecoilState(userStateAtom);
//     const [group, setGroup] = useRecoilState(groupStateAtom);
//     const setUserGroupID = useSetRecoilState(SetUserGroupID);
//     const setUserPendingGroups = useSetRecoilState(SetUserPendingGroups);
//     const setUserPendingInvitations = useSetRecoilState(SetUserPendingInvitations);

//     const newGroupID = "newgrouptest4";

    // async function createGroup() {
    //     // first, create a group locally
    //     var newGroup = {
    //         contact_email: user.email,
    //         description: "New Group Test Again!",
    //         group_id: newGroupID,
    //         members: [user.user_id],
    //         pending_members: [],
    //         tags1: [],
    //         tags2: [],
    //     };

    //     // add this group to the firebase
    //     await setDoc(doc(dbConfig, "2022-groups", newGroupID), newGroup);

    //     // update the current user's group on firebase
    //     const docRef2 = doc(dbConfig, "2022-users", user.user_id);
    //     await updateDoc(docRef2, {
    //         group_id: newGroupID,
    //         pending_groups: [],
    //     });

    //     // setRSVP for front-end Recoil atom
    //     setGroup(newGroup);
    //     setUserGroupID(newGroupID);
    //     setUserPendingGroups([]);
    //     setUserPendingInvitations([]);
    // }
    
//     return (
//         <div>
//             <button onClick={createGroup}>createGroup</button>
//             {user ? <h1>{user.group_id}</h1> : <h1> user group not set</h1>}
//         </div>
//     );
// }

// export default CreateGroupButton; 