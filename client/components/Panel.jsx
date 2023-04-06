import React, { useState, useEffect } from 'react';

const Panel = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <button class='panel' onClick={handleClick} disabled={clicked}>
      {clicked ? '' : '$' + props.money}
    </button>
  )
}

export default Panel;