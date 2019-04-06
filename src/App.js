import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Tile from "./components/Tile";
import tiles from "./tiles.json";

class App extends Component {
  state = {
    tiles,
    score: 0,
    highScore: 0,
    clicked: []
  };

  // function to reset score value and clicked array, and save high score if that's the case
  gameOver() {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score });
    }
    this.setState({ score: 0 });
    this.setState({ clicked: [] });
  }

  handleClickEvent = event => {

    // if tile was already clicked, runs game over function
    if (this.state.clicked.includes(event.target.dataset.id)) {
      this.gameOver();
    } else {
      // if tile was not already clicked, increases score and adds tile's id to clicked array
      this.state.clicked.push(event.target.dataset.id);
      this.setState({ score: this.state.score + 1 });

      // if user has clicked all tiles, runs game over function
      if (this.state.score === 12) {
        this.gameOver();
      }
    }
    console.log(this.state.clicked);

    // shuffles tiles array and re-renders based on the new state of the array
    this.shuffle(tiles);
    this.setState({ tiles });
  };

  shuffle = array => {
    array.sort(() => Math.random() - 0.5);
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <div className="section">
          <div className="container-fluid">
            <Header />

            <Body>
              {this.state.tiles.map(tile => (
                <Tile
                  url={tile.url}
                  key={tile.id}
                  id={tile.id}
                  handleClickEvent={this.handleClickEvent}
                />
              ))}
            </Body>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
