import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: ${({ boardColor }) => (boardColor ? boardColor : "")};
  width: 100vw;
  height: 100vh;
`;

export const AppContent = styled.div`
  height: calc(100vh - 60px);
  overflow: auto;
  padding: 15px;
`;
