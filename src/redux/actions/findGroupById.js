import { db } from "../db";

export function findGroupById(group_id) {
  console.log("hit findGroupById line 4 groupId:", group_id);
  var docRef = db.collection("2022-groups").doc(group_id);

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        let groupData = doc.data();
        console.log("hit findGroupById line 4 groupData:", groupData);
        return groupData;
      } else {
        console.log("No such document!");
        return undefined;
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      return undefined;
    });
}
