import styled from "styled-components";

export const Wrapper = styled.header`
  *:focus {
    outline: none;
  }
  height: 200px;
`;
export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #333;
`;
export const SearchBar = styled.form`
  margin: 10px;
`;
export const SearchInput = styled.input`
  position: relative;
  padding-left: 10px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  height: 40px;
  width: 180px;
  border: none;
`;
export const SearchButton = styled.button`
  position: relative;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  height: 42px;
  width: 80px;
  border: none;
  background-color: #f7941d;
  color: white;
  cursor: pointer;

  :hover {
    background-color: #ac6714;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  padding-left: calc(19vw + 20px);
  padding-right: calc(19vw + 20px);
  width: auto;
  height: auto;
  @media (max-width: 1400px) {
    padding-left: calc(12vw + 20px);
    padding-right: calc(12vw + 20px);
  }
  @media (max-width: 1200px) {
    padding-left: calc(4vw + 20px);
    padding-right: calc(4vw + 20px);
  }
  @media (max-width: 768px) {
    padding: 4px;
  }
`;
export const ImgLogo = styled.img`
  width: auto;
  height: 60px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const SearchTitle = styled.p`
  text-align: center;
  color: white;
  font-size: 0.8rem;
  :first-child {
    font-size: 1rem;
    font-weight: 700;
  }
`;
