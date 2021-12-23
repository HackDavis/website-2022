import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";
import { addPendingGroup } from "./addPendingGroup.js";
import { addPendingMember } from "./addPendingMember.js";

// user_id, name, email will be obtained from the User Recoil Atom
//how do we access group_id? (probably on the page))
export async function groupApplication(user_id, name, email, group_id) {
    await addPendingGroup(user_id, group_id);
    await addPendingMember(user_id, name, email, group_id);
}