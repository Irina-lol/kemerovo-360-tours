import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import KemerovoHeart from './components/KemerovoHeart/KemerovoHeart';
import PanoramicExcursions from './components/PanoramicExcursions/PanoramicExcursions';
import City from './components/City/City';
import DepthKuzbass from './components/DepthKuzbass/DepthKuzbass';
import KemerovoFoot from './components/KemerovoFoot/KemerovoFoot';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <KemerovoHeart />
        <PanoramicExcursions />
        <City />
        <DepthKuzbass />
        <KemerovoFoot />
        <Footer />
      </main>
    </>
  );
}

export default App;