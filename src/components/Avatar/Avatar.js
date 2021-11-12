import { getInitials } from "../../utils/utils";
import { AvatarContainer } from "./Avatar.style";

const Avatar = ({ userName }) => {
  return <AvatarContainer>{getInitials(userName)}</AvatarContainer>;
};

Avatar.defaultProps = {
  userName: "Dharmit Dosani",
};

export default Avatar;
