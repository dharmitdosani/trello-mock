import { createSlice } from "@reduxjs/toolkit";
import { CARDS_SLICE } from "./cards.config";

const initialState = {};

export const cardsSlice = createSlice({
  name: CARDS_SLICE,
  initialState,
  reducers: {
    createCard: (state, action) => {
      state[action.payload.id] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createCard } = cardsSlice.actions;

export default cardsSlice.reducer;
