import {
  HeaderContainer,
  StyledLogoLink,
  StyledIconLink,
} from "./Header.style";
import Logo from "../../assets/icons/logo.svg";
import HelpIcon from "../../assets/icons/info.svg";
import NotificationIcon from "../../assets/icons/notifications.svg";
import { ROUTES } from "../../values/routes";
import Search from "../Search/Search";
import Avatar from "../Avatar/Avatar";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLogoLink to={ROUTES.HOME}>
        <img src={Logo} alt="trello logo" />
      </StyledLogoLink>
      <Search />
      <StyledIconLink to={ROUTES.HELP}>
        <img src={HelpIcon} alt="help icon" />
      </StyledIconLink>
      <StyledIconLink to={ROUTES.NOTIFICATIONS}>
        <img src={NotificationIcon} alt="notification icon" />
      </StyledIconLink>
      <StyledIconLink to={ROUTES.PROFILE}>
        <Avatar />
      </StyledIconLink>
    </HeaderContainer>
  );
};

export default Header;
