import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    console.log(`Прокрутка к разделу: ${sectionId}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>360°</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <button onClick={() => scrollToSection('hero')} className={styles.navLink}>
              Главная
            </button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => scrollToSection('city')} className={styles.navLink}>
              О Кемерово
            </button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => scrollToSection('footer')} className={styles.navLink}>
              Контакты
            </button>
          </li>
        </ul>
      </nav>
      <div className={styles.placeholder}></div>
    </header>
  );
};

export default Header;