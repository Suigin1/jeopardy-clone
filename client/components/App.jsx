import React, { Component } from 'react';
import Gameboard from './Gameboard.jsx';
// import '../scss/styles.scss';

class App extends Component {
  render() {
    return (
      <div>
      <section className = "topSection">
        <button class="reset">Reset Game</button>
      </section>
      <section className = "gameboardSection">
        <Gameboard />
      </section>
      </div>
    );
  }
}

export default App;
