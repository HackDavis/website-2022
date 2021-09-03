import { MEMBER_ACCEPT } from "./types";
import { db } from "../db";

export function memberAccepted(user_id, name, email) { 
    return function (dispatch, getState) {
        // TODO: uncomment later when we have a groupId from GetUser
        let { group_id } = getState().userData;
        console.log("group_id:", group_id);

        // Set Group ID
        setGroupId(user_id, "new_group_id");
    };
}; 

function setGroupId(user_id, group_id) { 
    // gets user that will have their group ID changed
    var docRef = db.collection("2022-users").doc(user_id);
    docRef.update({group_id: group_id})
    .then(() => { 
        console.log("group id set");
    })
    .catch((error) => { 
        console.log("ERROR setting group id:", error);
    });
};