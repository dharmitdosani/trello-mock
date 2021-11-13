import { getRandomId } from "../../../utils/utils";

export const getNewList = (title) => ({
  id: getRandomId("list"),
  title,
  cards: [],
});
