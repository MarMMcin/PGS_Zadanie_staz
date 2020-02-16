import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const PaginationButton = styled.button`
  z-index: 10;
  background-color: #f7941d;
  border: none;
  width: 85px;
  height: 30px;
  border-radius: 20px;
  color: white;
  margin: 5px;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #ac6714;
  }
`;
export const ButtonContainer = styled.div`
  padding-bottom: 80px;
  display: block;
  text-align: center;
`;
