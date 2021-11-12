import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const StyledLogoLink = styled(Link)`
  margin-right: auto;
`;

export const StyledIconLink = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
`;
