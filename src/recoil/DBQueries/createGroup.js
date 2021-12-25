import { doc, getDoc, setDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";

export async function createGroup(email, newGroupID, user_id, newGroupDesc) {
    // first, create a group locally
    const newGroup = {
        contact_email: email,
        description: newGroupDesc,
        group_id: newGroupID,
        members: [user_id],
        pending_members: {},
        pending_invitations: [],
        tags1: [],
        tags2: [],
    };

    // add this group to the firebase
    await addDoc(collection(dbConfig, "2022-groups"), newGroup);

    // update the current user's group on firebase
    const docRef = doc(dbConfig, "2022-users", user_id);
    await updateDoc(docRef, {
        group_id: newGroupID,
        pending_groups: [],
    });

    return newGroup;
}
