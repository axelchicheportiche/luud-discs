import React from 'react';
import './ButtonBuy.css';

const MyButton = () => {

  const handleClick = () => {
    window.open('https://luuddiscs.bandcamp.com/album/f-unloved-ep', '_blank');
  };

  return (
    <button onClick={handleClick} className="button-buy">
      Buy it on Bandcamp
    </button>
  );
};

export default MyButton;
