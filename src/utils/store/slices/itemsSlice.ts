import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../../models/items";

const slice = createSlice({
  name: "items",
  initialState: {
    items: [] as Item[]
    // spostare fuori dalla funzione il push
  },
  reducers: {
    memorizeItem: (state, action: PayloadAction<Item>) => {
      state.items.push({
        ...action.payload
      })
    },
    removeAllMemorizedDBItems: (state) => {
      state.items.length = 0;
    }
  },
});

export const { memorizeItem, removeAllMemorizedDBItems } = slice.actions;

export default slice.reducer;

export const getCurrentDbItems = createSelector(
  (state: any) => state.items,
  (items: Item[]) => items
);
