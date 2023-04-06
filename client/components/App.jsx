import React, { useState, useEffect } from 'react';
import Gameboard from './Gameboard.jsx';
import QA, { VisContext } from './QA';

const App = () => {
  return (
    <div>
      <div class = "titletext">
        <img src="https://fontmeme.com/permalink/230405/a84f77ed1b41c4e129ab8dc83870eada.png" alt="jeopardy-font" border="0"/>
      </div>
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
