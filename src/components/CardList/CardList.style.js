import styled from "styled-components";
import { COLORS, THEME } from "../../values/colors";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
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
  box-shadow: 0 1px 0 ${COLORS.SILVER};

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
  position: relative;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const AddListButton = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  min-width: 300px;
  height: fit-content;
  margin: 20px 20px 0 0;
  padding: 10px;
  color: ${THEME.TEXT_SECONDARY};
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
