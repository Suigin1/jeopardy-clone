import React, { useState, useEffect, useContext, createContext } from 'react';

const visibility = {true:'visible', false:'hidden'}

const QA = () => {
  const [isVis, setIsVis] = useState(false);

  const VisContext = createContext([isVis, setIsVis]);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div style={{visibility: visibility[isVis]}}>
      <p>Hello</p>
    </div>
  );
}

export default QA;