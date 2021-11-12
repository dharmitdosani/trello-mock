import { SearchBarContainer, SearchInput } from "./Search.style";
import SearchIcon from "../../assets/icons/search.svg";

const Search = () => {
  return (
    <SearchBarContainer>
      <img src={SearchIcon} alt="search icon" />
      <SearchInput type="text" placeholder="Search" />
    </SearchBarContainer>
  );
};

export default Search;
