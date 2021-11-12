import styled from "styled-components";
import { COLORS } from "../../values/colors";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  width: 270px;
  height: 40px;
  padding: 4px;
`;

export const SearchInput = styled.input`
  width: 85%;
  border: none;
  background-color: transparent;
  font-size: 16px;
  outline: none;
  color: ${COLORS.WHITE};

  &:hover {
    cursor: pointer;
  }

  &::placeholder {
    color: ${COLORS.WHITE};
  }
`;
