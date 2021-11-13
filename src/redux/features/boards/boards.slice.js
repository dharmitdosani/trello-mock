import { createSlice } from "@reduxjs/toolkit";
import { BOARD_SLICE } from "./boards.config";

const initialState = {};

export const boardsSlice = createSlice({
  name: BOARD_SLICE,
  initialState,
  reducers: {
    createBoard: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    addListToBoard: (state, action) => {
      state[action.payload.boardId].lists.push(action.payload.listId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createBoard, addListToBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
