import { configureStore } from "@reduxjs/toolkit";
import { BOARD_SLICE } from "./features/boards/boards.config";
import boardsReducer from "./features/boards/boards.slice";

export const store = configureStore({
  reducer: {
    [BOARD_SLICE]: boardsReducer,
  },
});
