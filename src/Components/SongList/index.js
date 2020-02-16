import React from "react";
import Song from "../Song/";
import { NumberOfSongs, SongsContainer } from "./styled";

const SongList = props => {
  return (
    <>
      <NumberOfSongs>
        {props.result === 0
          ? "Sorry, no matches found"
          : `Found ${props.result} songs`}
      </NumberOfSongs>
      <SongsContainer>
        {props.songs.slice(props.prevPage, props.nextPage).map((song, i) => {
          return (
            <Song
              key={i}
              image={song.artworkUrl100}
              author={song.artistName}
              title={song.trackName}
            />
          );
        })}
      </SongsContainer>
    </>
  );
};

export default SongList;
