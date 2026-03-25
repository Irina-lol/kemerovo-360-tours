import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import KemerovoHeart from './components/KemerovoHeart/KemerovoHeart';
import PanoramicExcursions from './components/PanoramicExcursions/PanoramicExcursions';
import City from './components/City/City';
import DepthKuzbass from './components/DepthKuzbass/DepthKuzbass';
import KemerovoFoot from './components/KemerovoFoot/KemerovoFoot';
import Footer from './components/Footer/Footer';
import ImageGallery from './components/ImageGallery/ImageGallery';
import styles from './App.module.css';

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
  const [isOpen, setIsOpen] = useState(false);
  const telegramLink = "https://t.me/kemerovo360_guide_bot";
  const maxLink = "https://max.ru/u/89235003020";
  const phoneNumber = "89235003020";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleTelegram = () => {
    window.open(telegramLink, '_blank');
  };

  const handleMax = () => {
    window.open(maxLink, '_blank');
  };

  const handlePhone = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

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

      <div className={styles.floatingButtonContainer}>
        <button
          className={`${styles.floatingMainButton} ${isOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <svg className={styles.mainIcon} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M8 8H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 12H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <svg className={styles.closeIcon} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className={`${styles.floatingMenu} ${isOpen ? styles.open : ''}`}>
          <button className={styles.floatingMenuItem} onClick={handleTelegram}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Telegram</span>
          </button>
          <button className={styles.floatingMenuItem} onClick={handleMax}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M8 8H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M8 12H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>Max</span>
          </button>
          <button className={styles.floatingMenuItem} onClick={handlePhone}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19C22.0011 19.791 21.806 20.5704 21.4329 21.2642C21.0598 21.958 20.5211 22.5436 19.8675 22.9653C19.2139 23.387 18.4678 23.6312 17.696 23.6763C16.9241 23.7213 16.156 23.5661 15.46 23.224C13.2619 22.1988 11.2254 20.8572 9.43 19.25C7.83224 17.4589 6.49634 15.4467 5.47 13.26C5.12761 12.5653 4.97188 11.7982 5.01671 11.0273C5.06154 10.2564 5.30506 9.51106 5.72584 8.85786C6.14662 8.20466 6.73122 7.66608 7.42405 7.29264C8.11688 6.9192 8.89535 6.7234 9.685 6.72339H11.82C12.2464 6.72305 12.6597 6.86239 12.997 7.11844C13.3342 7.37448 13.5756 7.73247 13.682 8.13839L14.313 10.3884C14.4033 10.739 14.3879 11.1069 14.2687 11.4485C14.1496 11.79 13.9327 12.0894 13.645 12.3094L12.112 13.5214C12.6034 14.5447 13.2308 15.495 13.976 16.3424C14.8337 17.0805 15.797 17.6932 16.835 18.1594L18.047 16.6264C18.2674 16.3388 18.5669 16.1221 18.9086 16.0031C19.2502 15.8841 19.6181 15.8688 19.9687 15.9591L22.2197 16.5901C22.6258 16.6967 22.9838 16.9382 23.2397 17.2756C23.4956 17.613 23.6348 18.0263 23.6343 18.4528L22.2197 16.5901Z" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
            <span>Позвонить</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;