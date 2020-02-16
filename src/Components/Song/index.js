import React from "react";
import logo from "../../logo.svg";
import {
  Wrapper,
  Container,
  ReceivedImg,
  SongsWrapper,
  SongData,
  Line
} from "./styled";

const Song = props => {
  return (
    <Wrapper>
      <Container>
        <ReceivedImg src={props.image || logo} alt="song image" />
        <SongsWrapper>
          <SongData>{props.title}</SongData>
          <Line />
          <SongData>By {props.author}</SongData>
        </SongsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Song;
