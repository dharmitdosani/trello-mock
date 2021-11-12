import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px;
`;

export const StyledLogoLink = styled(Link)`
  margin-right: auto;
`;

export const StyledIconLink = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
`;
