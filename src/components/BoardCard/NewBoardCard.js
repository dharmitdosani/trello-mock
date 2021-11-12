import { EmptyBoardCard } from "./BoardCard.style";

const NewBoardCard = () => {
  return (
    <EmptyBoardCard onClick={console.log("createNewBoard")}>
      Create New Board
    </EmptyBoardCard>
  );
};

export default NewBoardCard;
