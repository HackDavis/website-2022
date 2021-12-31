import { doc, updateDoc} from "firebase/firestore";
import { dbConfig } from "../dbConfig.js";
import { getUser } from "./getUser.js";
import { getGroup } from "./getGroup.js";

export async function deletePendingGroup(user_id, group_id) {
    const docRef = doc(dbConfig, "2022-users", user_id);
    try {
        const userData = await getUser(user_id);
        const groupData = await getGroup(group_id);
        let new_pending_groups = [...userData.pending_groups];
        // splice requires the index of the group_id you are searching for
        let groupIndex = new_pending_groups.indexOf(groupData.group_id);
        new_pending_groups.splice(groupIndex, 1); 
        await updateDoc(docRef, {
            pending_groups: new_pending_groups
        });
        return new_pending_groups;
    } catch(e) {
        console.log(`deletePendingGroup error ${e}`);
    }
}
