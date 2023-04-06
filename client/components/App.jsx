import React, { useState, useEffect } from 'react';
import Gameboard from './Gameboard.jsx';
// import '../scss/styles.scss';

const App = () => {
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


export default App;
