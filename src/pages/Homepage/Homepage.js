import PageTitle from "../../components/PageTitle/PageTitle";
import BoardCard from "../../components/BoardCard/BoardCard";
import { TITLE_MODES } from "../../components/PageTitle/PageTitle.config";
import NewBoardCard from "../../components/BoardCard/NewBoardCard";
import { CardListContainer } from "./HomePage.style";
import { useSelector } from "react-redux";
import { BOARD_SLICE } from "../../redux/features/boards/boards.config";
import { getArrFromObj } from "../../utils/utils";

const HomePage = () => {
  const allBoards = useSelector((state) => state[BOARD_SLICE]);

  return (
    <>
      <PageTitle mode={TITLE_MODES.DARK}>All Boards</PageTitle>
      <CardListContainer>
        <NewBoardCard />
        {getArrFromObj(allBoards).map((cardProps) => (
          <BoardCard {...cardProps} key={cardProps.id} />
        ))}
      </CardListContainer>
    </>
  );
};

export default HomePage;
