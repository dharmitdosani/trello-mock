import PageTitle from "../../components/PageTitle/PageTitle";
import { TITLE_MODES } from "../../components/PageTitle/PageTitle.config";

const Homepage = () => {
  return <PageTitle mode={TITLE_MODES.DARK}>All Boards</PageTitle>;
};

export default Homepage;
