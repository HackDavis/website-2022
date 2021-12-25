import { doc, updateDoc} from "firebase/firestore";
import { dbConfig } from "../../db/dbConfig.js";

export async function deletePendingGroup(user_id, new_pending_groups) {
    const docRef = doc(dbConfig, "2022-users", user_id);
    try {
        await updateDoc(docRef, {
            pending_groups: new_pending_groups,
        });
        console.log("deletePendingGroup success");
    } catch(e) {
        console.log(`deletePendingGroup error ${e}`);
    }
}
