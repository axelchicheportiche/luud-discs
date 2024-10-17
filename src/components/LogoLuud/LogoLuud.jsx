import React from 'react';
import logoluud from '../../assets/logo-luud.png';
import './LogoLuud.css';


const LogoLuud = () => {
    return (
      <div className="luuud-logo-container">
        <img src={logoluud} alt="logo lüüd discs" className="logo-luud" />
      </div>
    );
  };
  
  export default LogoLuud;