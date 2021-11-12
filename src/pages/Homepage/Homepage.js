import PageTitle from "../../components/PageTitle/PageTitle";
import BoardCard from "../../components/BoardCard/BoardCard";
import { TITLE_MODES } from "../../components/PageTitle/PageTitle.config";
import NewBoardCard from "../../components/BoardCard/NewBoardCard";
import { CardListContainer } from "./HomePage.style";
import { tempBoardList } from "./HomePage.config";

const HomePage = () => {
  return (
    <>
      <PageTitle mode={TITLE_MODES.DARK}>All Boards</PageTitle>
      <CardListContainer>
        <NewBoardCard />
        {tempBoardList.map((cardProps) => (
          <BoardCard {...cardProps} key={cardProps.id} />
        ))}
      </CardListContainer>
    </>
  );
};

export default HomePage;
