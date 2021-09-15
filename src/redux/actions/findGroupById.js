import { doc, getDoc } from "firebase/firestore";
import { db } from "../db";

export async function findGroupById(group_id) {
  const docRef = doc(db, "2022-groups", group_id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
        let groupData = docSnap.data();
        console.log("groupData found:", groupData);
        return groupData;
  } else {
    console.log("No such document exists!");
    return undefined;
  };
};
