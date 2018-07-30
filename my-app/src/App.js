import React, { Component } from 'react';
import CarsCard from "./components/CarsCard";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import './App.css';
import cars from "./cars.json";

function shufflecars(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

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

        <Container>
          <Row>
          {this.state.cars.map(car => (
              <Column size="md-3 sm-6">
                <CarsCard
                  key={car.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={car.id}
                  image={car.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
        </Wrapper>
    );
  }
}

export default App;
