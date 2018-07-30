import React, { Component } from 'react';
import CarsCard from "./components/CarsCard";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import './App.css';
import cars from "./cars.json";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";

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


handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    this.setState({ clicked: this.state.clicked.concat(id) });
  } else {
    this.handleReset();
  }
};


handleIncrement = () => {
  const newScore = this.state.currentScore + 1;
  this.setState({
    currentScore: newScore,
    rightWrong: ""
  });
  if (newScore >= this.state.topScore) {
    this.setState({ topScore: newScore });
  }
  else if (newScore === 12) {
    this.setState({ rightWrong: "You win!" });
  }
  this.handleShuffle();
};


handleReset = () => {
  this.setState({
    currentScore: 0,
    topScore: this.state.topScore,
    rightWrong: "Boo!",
    clicked: []
  });
  this.handleShuffle();
};

handleShuffle = () => {
  let shuffledcars = shufflecars(cars);
  this.setState({ cars: shuffledcars });
};

render() {
  return (
    <Wrapper>
      <Nav
        title="Cars Clicky Game"
        score={this.state.currentScore}
        topScore={this.state.topScore}
        wrong={this.state.rightWrong}
      />

        <Title></Title>

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