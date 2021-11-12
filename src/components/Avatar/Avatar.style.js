import styled from "styled-components";
import { COLORS } from "../../values/colors";

export const AvatarContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${COLORS.WHITE};
  background-color: ${COLORS.GIGAS};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.WHITE};
`;
