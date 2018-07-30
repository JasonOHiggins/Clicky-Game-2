import React, { Component } from 'react';
import CarsCard from "./components/CarsCard";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import './App.css';
import cars from "./cars.json";

class App extends Component {
  state = {
    cars,
    currentScore: 0,
    topScore: 0,
    wrong: "",
    clicked: [],
  };
}

render () {
  return (
    <Wrapper>
      <Nav
        title="Clicky Game"
        score={this.state.currentScore}
        topScore={this.state.topScore}
        wrong={this.state.wrong}
        />

        <Title>
          Click each car, but not more than once, or you're OUTTA THERE!
        </Title>
        </Wrapper>
  )
};

export default App;
