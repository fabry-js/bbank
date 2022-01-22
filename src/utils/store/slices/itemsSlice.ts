import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Item } from "../../../models/items";
import { retrieveAllItemsFromDatabase } from "../../firebase/dbOperations";

const slice = createSlice({
  name: "items",
  initialState: {
    items: [] as any
    // spostare fuori dalla funzione il push
  },
  reducers: {
    retrieveAllDbItems: (state) => {
      const email = "vivaldifabrizio10@gmail.com"
      retrieveAllItemsFromDatabase(email).then((items) => {
        return items.forEach((item) => state.items.push(item));
      });
    },
  },
});

export const { retrieveAllDbItems } = slice.actions;

export default slice.reducer;

export const getCurrentDbItems = createSelector(
  (state: any) => state.items,
  (items: Item[]) => items
);
