import { getRandomId } from "../../../utils/utils";

export const getNewList = (title) => ({
  id: getRandomId(),
  title,
  cards: [],
});
