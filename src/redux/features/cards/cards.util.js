import { getRandomId } from "../../../utils/utils";

export const getNewCard = (text) => ({
  id: getRandomId("card"),
  text,
});
