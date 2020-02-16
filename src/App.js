import React, { Component } from "react";
import Header from "./Components/Header/";
import SongList from "./Components/SongList/";
import Footer from "./Components/Footer";
import { ButtonContainer, PaginationButton, Container } from "./styled";
import { GlobalStyles } from "./GlobalStyle";
import { PAGE_SIZE } from "./constants";

class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      searchBox: "",
      totalResults: 0,
      prevPage: 0,
      nextPage: PAGE_SIZE
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `https://itunes.apple.com/search?term=${this.state.searchBox}&entity=song&limit=200`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          songs: data.results,
          totalResults: data.resultCount
        });
      });
  };
  handleChange = e => {
    this.setState({ searchBox: e.target.value });
  };

  handleClick = () => {
    if (this.state.prevPage === 0) return;

    this.setState({
      nextPage: this.state.nextPage - PAGE_SIZE,
      prevPage: this.state.prevPage - PAGE_SIZE
    });
  };

  handleClickNext = () => {
    if (this.state.nextPage < this.state.totalResults) {
      this.setState({
        nextPage: this.state.nextPage + PAGE_SIZE,
        prevPage: this.state.prevPage + PAGE_SIZE
      });
    } else {
      console.warn("too high value");
    }
  };
  restart = () => {
    this.setState({ prevPage: 0, nextPage: PAGE_SIZE });
  };
  render() {
    let buttons;

    if (this.state.totalResults > PAGE_SIZE) {
      buttons = (
        <ButtonContainer>
          <PaginationButton onClick={this.handleClick}>
            {"<<prev"}
          </PaginationButton>
          <PaginationButton onClick={this.handleClickNext}>
            next >>
          </PaginationButton>
        </ButtonContainer>
      );
    }

    return (
      <Container>
        <GlobalStyles />
        <Header
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          restart={this.restart}
        ></Header>
        <SongList
          prevPage={this.state.prevPage}
          nextPage={this.state.nextPage}
          songs={this.state.songs}
          result={this.state.totalResults}
        />
        {buttons}
        <Footer />
      </Container>
    );
  }
}

export default App;
