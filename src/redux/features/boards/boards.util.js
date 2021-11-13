import { getRandomId } from "../../../utils/utils";
import { COLORS } from "../../../values/colors";

export const getNewBoard = (title) => ({
  id: getRandomId(),
  title,
  boardColor: COLORS.LOCHMARA,
  cardLists: [],
});
