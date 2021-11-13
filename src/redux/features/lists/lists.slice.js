import { createSlice } from "@reduxjs/toolkit";
import { LISTS_SLICE } from "./lists.config";

const initialState = {};

export const listsSlice = createSlice({
  name: LISTS_SLICE,
  initialState,
  reducers: {
    createList: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    addCardToList: (state, action) => {
      state[action.payload.listId].cards.push(action.payload.cardId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createList, addCardToList } = listsSlice.actions;

export default listsSlice.reducer;
