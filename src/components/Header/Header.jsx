import React from 'react';
import logo from '../../assets/logo-header.png';
import './Header.css';


const Header = () => {
    return (
      <header className="main-header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
    );
  };
  
  export default Header;