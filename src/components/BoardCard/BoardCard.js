import { getBoardRoute } from "../../values/routes";
import { CardLink, CardTitle } from "./BoardCard.style";

const BoardCard = ({ id, title, boardColor }) => {
  return (
    <CardLink to={getBoardRoute(id)} boardColor={boardColor}>
      <CardTitle>{title}</CardTitle>
    </CardLink>
  );
};

export default BoardCard;
