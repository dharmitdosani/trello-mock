import { createSlice } from "@reduxjs/toolkit";
import { COLORS } from "../../../values/colors";
import { getRandomId } from "../../../utils/utils";
import { BOARD_SLICE } from "./boards.config";

// SINGLE BOARDS ITEM
// [randomId]: {
//   id: randomId,
//   title: "board 1",
//   boardColor: COLORS.LOCHMARA,
//   cardLists: [],
// },

const randomId = getRandomId();

const initialState = {
  [randomId]: {
    id: randomId,
    title: "board 1",
    boardColor: COLORS.LOCHMARA,
    cardLists: [],
  },
};

export const boardsSlice = createSlice({
  name: BOARD_SLICE,
  initialState,
  reducers: {
    createBoard: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    addListToBoard: (state, action) => {
      state[action.payload.boardId].cardList.push(action.payload.listId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createBoard, addListToBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
