import React, { useState, useEffect } from 'react';
import Panel from './Panel';

const category = ['Math', 'Science', 'Literature', 'History', 'Geography', 'Law'];
const questions = [[], [], [], [], [], []];
const answers = [[], [], [], [], [], []];
const money = [200, 400, 600, 800, 1000]

const cats = category.map(el => {
  return (
    <p class='category'>{el}</p>
  )
})

const panels = money.map(el => {
  return (
    <Panel key={el / 200} money={el}></Panel>
  )
})


const Gameboard = () => { 
    return (
      <div>
        <div>
        <section className="categorySection">
          {cats}
        </section>
        </div>
        <div>
        <section className="clueSection">
          {/* <VisContext.Provider> */}
          {panels}
          {panels}
          {panels}
          {panels}
          {panels}
          {panels}
          {/* </VisContext.Provider> */}
        </section>
        </div>
      </div>
    );
}


export default Gameboard;