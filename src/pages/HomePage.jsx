import React from 'react';
import './HomePage.css';
import Header from '../components/Header/Header';
import Packshot from '../components/Packshot/Packshot';
import ButtonBuy from '../components/Button/ButtonBuy';
// import Gallery from '../components/Gallery/Gallery';

const HomePage = () => {
  return (
    <div className="home-container"> 
      <Header />
      <Packshot />
      <ButtonBuy />
      {/* Ajoute d'autres composants ici */}
    </div>
  );
};

export default HomePage;