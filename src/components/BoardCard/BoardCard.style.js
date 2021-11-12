import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, THEME } from "../../values/colors";

export const CardLink = styled(Link)`
  width: 400px;
  height: 100px;
  cursor: pointer;
  padding: 20px;
  border-radius: 4px;
  display: inline-block;
  margin: 20px 20px 0 0;
  background-color: ${({ $boardColor }) => $boardColor};
  text-decoration: none;
`;

export const CardTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: ${THEME.TEXT_SECONDARY};

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;

export const EmptyBoardCard = styled.div`
  width: 400px;
  height: 100px;
  cursor: pointer;
  padding: 20px;
  border-radius: 4px;
  margin: 20px 20px 0 0;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  color: ${COLORS.BLACK};
  background-color: ${COLORS.ATHENS_GRAY};
  position: relative;
`;
