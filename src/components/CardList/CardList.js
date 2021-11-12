import AddCard from "./AddCard";
import { Card, CardContainer, List, ListTitle } from "./CardList.style";

const CardList = ({ title, cards }) => {
  return (
    <List>
      <ListTitle>{title}</ListTitle>
      <CardContainer>
        {cards.map(({ id, text }) => (
          <Card key={id}>{text}</Card>
        ))}
      </CardContainer>
      <AddCard />
    </List>
  );
};

export default CardList;
