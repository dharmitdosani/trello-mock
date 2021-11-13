import { getRandomId } from "../../../utils/utils";
import { COLORS } from "../../../values/colors";

export const getNewBoard = (title) => ({
  id: getRandomId("board"),
  title,
  boardColor: COLORS.LOCHMARA,
  lists: [],
});
