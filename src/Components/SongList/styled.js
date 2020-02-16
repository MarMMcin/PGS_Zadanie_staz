import styled from "styled-components";
export const SongsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 19vw 0 19vw;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  @media (max-width: 1400px) {
    padding: 0 12vw 0 12vw;
  }
  @media (max-width: 1200px) {
    padding: 0 4vw 0 4vw;
  }
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;
export const NumberOfSongs = styled.p`
  margin-top: 50px;
  text-align: center;
`;
