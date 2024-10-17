import React from 'react';
import './HomePage.css';
import Header from '../components/Header/Header';
import Packshot from '../components/Packshot/Packshot';
import ButtonBuy from '../components/Button/ButtonBuy';
import LogoLuud from '../components/LogoLuud/LogoLuud';
import AboutUs from '../components/AboutUs/AboutUs';

// import Gallery from '../components/Gallery/Gallery';

const HomePage = () => {
  return (
    <div className="home-container"> 
      <Header />
      <Packshot />
      <ButtonBuy />
      <LogoLuud />
      <AboutUs />
      <h1>Listen to us</h1>
      {/* Ajoute d'autres composants ici */}
    </div>
  );
};

export default HomePage;