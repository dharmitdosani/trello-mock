import { useSelector } from "react-redux";
import { CARDS_SLICE } from "../../redux/features/cards/cards.config";
import { getArrFromObj } from "../../utils/utils";
import AddCard from "./AddCard";
import { Card, CardContainer, List, ListTitle } from "./CardList.style";

const CardList = ({ id: listId, title, cards }) => {
  const allCards = useSelector((state) => state[CARDS_SLICE]);

  const currentCards = getArrFromObj(allCards).filter((cardItem) =>
    cards.includes(cardItem.id)
  );

  return (
    <List>
      <ListTitle>{title}</ListTitle>
      <CardContainer>
        {currentCards.map(({ id, text }) => (
          <Card key={id}>{text}</Card>
        ))}
      </CardContainer>
      <AddCard listId={listId} />
    </List>
  );
};

export default CardList;
