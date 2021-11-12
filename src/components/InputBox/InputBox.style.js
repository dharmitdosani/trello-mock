import styled from "styled-components";
import { THEME } from "../../values/colors";

const actionsHeight = "50px";

export const InputForm = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100% + ${actionsHeight});
  cursor: initial;
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledInputBox = styled.textarea`
  resize: none;
  width: 100%;
  height: calc(100% - ${actionsHeight});
  font-family: inherit;
  font-size: inherit;
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  height: ${actionsHeight};
`;

export const AddButton = styled.button`
  background-color: ${THEME.PRIMARY_CTA};
  color: ${THEME.TEXT_SECONDARY};
  border: 1px solid ${THEME.TEXT_SECONDARY};
  outline: none;
  font-weight: bold;
  font-size: 16px;
  padding: 4px 8px;
  cursor: pointer;
  margin-left: 12px;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${THEME.TEXT_SECONDARY};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin-left: 12px;
`;
