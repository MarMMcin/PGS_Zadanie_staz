import React from "react";
import {
  Wrapper,
  LogoWrapper,
  ImgLogo,
  SearchInput,
  SearchSection,
  SearchTitle,
  SearchBar,
  SearchButton
} from "./styled";
import Logo from "../../images/logo.png";

const SearchArea = props => {
  return (
    <Wrapper>
      <LogoWrapper>
        <ImgLogo src={Logo} alt="" />
      </LogoWrapper>
      <SearchSection>
        <SearchTitle>iTunes api example</SearchTitle>
        <SearchBar onSubmit={props.handleSubmit}>
          <SearchInput
            placeholder="Search songs.."
            type="text"
            onChange={props.handleChange}
          />
          <SearchButton onClick={props.restart}>search</SearchButton>
        </SearchBar>

        <SearchTitle>
          Search by song title, author, song number, lyrics, catalog or
          copyright owner
        </SearchTitle>
      </SearchSection>
    </Wrapper>
  );
};

export default SearchArea;
