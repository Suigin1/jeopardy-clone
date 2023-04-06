import React, { useState, useEffect } from 'react';
import Category from './Category';

const category = ['Math', 'Science', 'Literature', 'History', 'Geography', 'Law'];
const money = [200, 400, 600, 800, 1000]

const cats = category.map(el => {
      return (
        <p class='category'>{el}</p>
      )
    })

const panels = money.map(el => {
  return (
    <button class='panel'>{'$' + el}</button>
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
          {panels}
          {panels}
          {panels}
          {panels}
          {panels}
          {panels}
        </section>
        </div>
      </div>
    );
}


export default Gameboard;