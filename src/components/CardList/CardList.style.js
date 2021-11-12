import styled from "styled-components";
import { COLORS, THEME } from "../../values/colors";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  max-height: calc(100% - 20px); // 20px is margin top
  margin: 20px 20px 0 0;
  padding: 0 10px;
  background-color: ${COLORS.ATHENS_GRAY};
  border-radius: 4px;
`;

export const ListTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${THEME.TEXT_PRIMARY};
  margin: 10px 0;
`;

export const CardContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const Card = styled.div`
  background-color: ${COLORS.WHITE};
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const AddCardButton = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: ${COLORS.SHUTTLE_GRAY};
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
  margin: 10px 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
