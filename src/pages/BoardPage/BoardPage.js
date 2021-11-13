import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import AddList from "../../components/CardList/AddList";
import CardList from "../../components/CardList/CardList";
import PageTitle from "../../components/PageTitle/PageTitle";
import { TITLE_MODES } from "../../components/PageTitle/PageTitle.config";
import { BOARD_SLICE } from "../../redux/features/boards/boards.config";
import { ROUTES } from "../../values/routes";
import { BoardListsContainer } from "./BoardPage.style";
import { boardLists } from "./BoardPage.config";

const BoardPage = () => {
  const { id } = useParams();
  const allBoards = useSelector((state) => state[BOARD_SLICE]);
  const currentBoard = allBoards[id];

  console.log("currentBoard: ", currentBoard);

  if (!currentBoard) return <Navigate to={ROUTES.HOME} replace={true} />;

  return (
    <>
      <PageTitle mode={TITLE_MODES.DARK}>{currentBoard.title}</PageTitle>
      <BoardListsContainer>
        {currentBoard.cardLists.map((list) => (
          <CardList key={list.id} {...list} />
        ))}
        <AddList />
      </BoardListsContainer>
    </>
  );
};

export default BoardPage;
