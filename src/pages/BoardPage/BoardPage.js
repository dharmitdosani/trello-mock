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
import { LISTS_SLICE } from "../../redux/features/lists/lists.config";
import { getArrFromObj } from "../../utils/utils";

const BoardPage = () => {
  const { id: boardId } = useParams();
  const allBoards = useSelector((state) => state[BOARD_SLICE]);
  const currentBoard = allBoards[boardId];

  const allLists = useSelector((state) => state[LISTS_SLICE]);

  if (!currentBoard) return <Navigate to={ROUTES.HOME} replace={true} />;

  const currentLists = getArrFromObj(allLists).filter((listItem) =>
    currentBoard.lists.includes(listItem.id)
  );

  return (
    <>
      <PageTitle mode={TITLE_MODES.DARK}>{currentBoard.title}</PageTitle>
      <BoardListsContainer>
        {currentLists.map((list) => (
          <CardList key={list.id} {...list} />
        ))}
        <AddList boardId={boardId} />
      </BoardListsContainer>
    </>
  );
};

export default BoardPage;
