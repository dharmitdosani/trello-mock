import { configureStore } from "@reduxjs/toolkit";
import { BOARD_SLICE } from "./features/boards/boards.config";
import { LISTS_SLICE } from "./features/lists/lists.config";
import boardsReducer from "./features/boards/boards.slice";
import listsReducer from "./features/lists/lists.slice";

export const store = configureStore({
  reducer: {
    [BOARD_SLICE]: boardsReducer,
    [LISTS_SLICE]: listsReducer,
  },
});
