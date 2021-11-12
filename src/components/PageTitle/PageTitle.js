import { TITLE_MODES } from "./PageTitle.config";
import { Title } from "./PageTitle.style";

const PageTitle = ({ mode, ...props }) => (
  <Title mode={mode}>{props.children}</Title>
);

PageTitle.defaultProps = {
  mode: TITLE_MODES.DARK,
};

export default PageTitle;
