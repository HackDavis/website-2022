import { doc, updateDoc} from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";

export async function deletePendingMember(group_id, new_pending_members) {
    const docRef = doc(dbConfig, "2022-groups", group_id);
    try {
        await updateDoc(docRef, {
            pending_members: new_pending_members,
        });
        console.log("deletePendingMember success");
    } catch(e) {
        console.log(`deletePendingMember error ${e}`);
    }
}
