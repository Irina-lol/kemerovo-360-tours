import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import KemerovoHeart from './components/KemerovoHeart/KemerovoHeart';
import PanoramicExcursions from './components/PanoramicExcursions/PanoramicExcursions';
import City from './components/City/City'


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <KemerovoHeart />
        <PanoramicExcursions />
        <City />
      </main>
    </>
  );
}

export default App;