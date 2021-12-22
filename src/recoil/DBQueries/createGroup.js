import { doc, getDoc, setDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";

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
    await addDoc(collection(dbConfig, "2022-groups"), newGroup);

    // update the current user's group on firebase
    const docRef2 = doc(dbConfig, "2022-users", user_id);
    await updateDoc(docRef2, {
        group_id: newGroupID,
        pending_groups: [],
    });

    return newGroup;
}
