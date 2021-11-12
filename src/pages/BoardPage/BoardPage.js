import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import AddList from "../../components/CardList/AddList";
import CardList from "../../components/CardList/CardList";
import PageTitle from "../../components/PageTitle/PageTitle";
import { TITLE_MODES } from "../../components/PageTitle/PageTitle.config";
import { ROUTES } from "../../values/routes";
import { boardLists } from "./BoardPage.config";
import { BoardListsContainer } from "./BoardPage.style";

const BoardPage = () => {
  const { id: boardId } = useParams();
  const currentBoard = boardLists.find(({ id }) => id === boardId);

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
