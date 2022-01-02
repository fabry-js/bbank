// CRUD Pattern is always the best choice, isn't it?

import { collection, getDocs } from "firebase/firestore";
import { Item } from "../../dashboard/tabs/movement/movement-components/actions/models/items";
import { _firestore } from "./firebase";

export const insertItemIntoDatabase = async () => {
  console.log("Ya!");
};

export const deleteItemFromDatabase = async () => {
  console.log("Puff!");
};

export const updateItemToDatabase = async () => {
  console.log("Ok!");
};
// Retrieve is always shown.
export const retrieveAllItemsFromDatabase = async (user: any): Promise<Item[]>=> {
  return new Promise<Item[]>(async (resolve, reject) => {
    try {
      const qs = await getDocs(collection(_firestore, user.email));
      let resArr: Item[] = []
      qs.forEach((doc) => {
        return resArr.push(doc.data() as Item);
      })
      resolve(resArr.filter((item) => item.id !== "analytics")) 
    } catch (error) {
      reject(error)
    }
  })
};
