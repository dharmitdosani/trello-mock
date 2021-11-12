import styled from "styled-components";
import { COLORS, THEME } from "../../values/colors";
import { TITLE_MODES } from "./PageTitle.config";

export const Title = styled.h1`
  color: ${({ mode }) =>
    mode === TITLE_MODES.DARK ? THEME.TEXT_PRIMARY : THEME.TEXT_SECONDARY};
  margin: 0;
  padding-bottom: 12px;
  border-bottom: 1px solid ${COLORS.SILVER};
`;
