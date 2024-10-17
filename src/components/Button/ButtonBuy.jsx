import React from 'react';

const MyButton = () => {

  const handleClick = () => {
    window.open('https://luuddiscs.bandcamp.com/album/f-unloved-ep', '_blank');
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      Buy it on Bandcamp
    </button>
  );
};

// Style du bouton (facultatif)
const buttonStyle = {
  borderRadius: '6px',
  background: '#D9D9D9',
  width: '196px',
  height: '33.532px',
  cursor: 'pointer',
};

export default MyButton;
