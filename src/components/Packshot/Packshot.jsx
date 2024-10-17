import React from 'react';
import packshot1 from '../../assets/f_unloved_1_1.png';
import packshot2 from '../../assets/f_unloved_2_1.png';
import './Packshot.css';


const Packshot = () => {
    return (
      <div className="packshot-container">
        <img src={packshot1} alt="packshot-front" className="packshot1" />
        <img src={packshot2} alt="packshot-back" className="packshot2" />
      </div>
    );
  };
  
  export default Packshot;