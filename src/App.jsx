import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import KemerovoHeart from './components/KemerovoHeart/KemerovoHeart';
import PanoramicExcursions from './components/PanoramicExcursions/PanoramicExcursions';
import City from './components/City/City';
import DepthKuzbass from './components/DepthKuzbass/DepthKuzbass';
import KemerovoFoot from './components/KemerovoFoot/KemerovoFoot';
import Footer from './components/Footer/Footer';
import ImageGallery from './components/ImageGallery/ImageGallery';

import depth1 from './assets/depth.png';
import depth2 from './assets/dep.jpg';
import depth3 from './assets/dept.jpg';
import depth4 from './assets/depthgo.jpg';
import depth5 from './assets/depthzd.jpg';
import depth6 from './assets/wheel.png';

import foot1 from './assets/mani.png';
import foot2 from './assets/painting.jpg';
import foot3 from './assets/roof.jpg';
import foot4 from './assets/tulip.jpg';
import foot5 from './assets/nlo.jpg';
import foot6 from './assets/woman.png';

import human from './assets/human.jpg';
import manhourse from './assets/manhourse.jpg';
import statue from './assets/statue.jpg';
import tallstatue from './assets/tallstatue.jpg';
import fire from './assets/fire.jpg';
import star from './assets/star.jpg';

function App() {
  const depthGalleryImages = [
    { src: depth1, alt: 'Кедровский угольный разрез - панорама' },
    { src: depth2, alt: 'Карьерная техника в работе' },
    { src: depth3, alt: 'Угольный разрез вид сверху' },
    { src: depth4, alt: 'Экскаватор на разрезе' },
    { src: depth5, alt: 'Промышленный пейзаж' },
    { src: depth6, alt: 'Колесо карьерного самосвала' },
  ];

  const footGalleryImages = [
    { src: foot1, alt: 'Прогулка по Кемерово' },
    { src: foot2, alt: 'Уличное искусство в Кемерово' },
    { src: foot3, alt: 'Вид с крыши на город' },
    { src: foot4, alt: 'Тюльпаны в парке' },
    { src: foot5, alt: 'Арт-объект НЛО' },
    { src: foot6, alt: 'Городской портрет' },
  ];

  const cityGalleryImages = [
    { src: human, alt: 'Памятник в Кемерово' },
    { src: manhourse, alt: 'Конный памятник' },
    { src: statue, alt: 'Скульптура в городе' },
    { src: tallstatue, alt: 'Высокий монумент' },
    { src: fire, alt: 'Мемориал Вечный огонь' },
    { src: star, alt: 'Звезда на здании' },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero />
        <KemerovoHeart />
        <PanoramicExcursions />
        <City />
        <ImageGallery
          images={cityGalleryImages}
        />
        <KemerovoFoot />
        <ImageGallery
          images={footGalleryImages}
        />
        <DepthKuzbass />
        <ImageGallery
          images={depthGalleryImages}
        />
        <Footer />
      </main>
    </>
  );
}

export default App;