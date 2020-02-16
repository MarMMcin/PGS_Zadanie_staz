import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 20px;
  margin: 30px 0 10px 0;
  width: 260px;
  height: 100px;
  background-color: #f0f0f0;

  cursor: pointer;
  :hover {
    outline: 2px solid #f7951d;
    box-shadow: -2px -1px 22px -6px rgba(0, 0, 0, 0.75);
  }
  @media (max-width: 768px) {
    :last-child {
      margin-bottom: 80px;
    }
  }
`;
export const Container = styled.div`
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
`;
export const ReceivedImg = styled.img`
  width: 100;
  height: 100;
  min-height: 100;
  min-width: 100;
  outline: 1px solid black;
  box-shadow: -2px -1px 22px -6px rgba(0, 0, 0, 0.75);
`;

export const SongsWrapper = styled.div`
  max-height: 90px;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const SongData = styled.p`
  text-align: center;
  font-size: 0.8rem;
  :first-child {
    font-weight: 600;
  }
`;
export const Line = styled.div`
  display: block;
  margin: 0 40px;
  height: 1px;
  width: 80px;
  background-color: #999;
`;
