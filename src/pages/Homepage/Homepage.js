import PageTitle from "../../components/PageTitle/PageTitle";
import BoardCard from "../../components/BoardCard/BoardCard";
import { TITLE_MODES } from "../../components/PageTitle/PageTitle.config";
import { COLORS } from "../../values/colors";
import NewBoardCard from "../../components/BoardCard/NewBoardCard";
import { CardListContainer } from "./Homepage.style";

const tempBoardList = [
  {
    id: "ioehrfeojd",
    title: "board 1",
    boardColor: COLORS.LOCHMARA,
  },
];

const Homepage = () => {
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

export default Homepage;
