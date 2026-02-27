import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLinkClick = (sectionId) => {
    console.log(`Прокрутка к разделу: ${sectionId}`);
    setIsMenuOpen(false);
  };

  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>360°</div>

        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <button onClick={() => handleLinkClick('hero')} className={styles.navLink}>
                Главная
              </button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => handleLinkClick('city')} className={styles.navLink}>
                О Кемерово
              </button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => handleLinkClick('footer')} className={styles.navLink}>
                Контакты
              </button>
            </li>
          </ul>
        </nav>

        <button
          className={`${styles.burgerButton} ${isMenuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.menuOverlay} onClick={handleOverlayClick}></div>

        <div className={styles.menuContent}>
          <button
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            ✕
          </button>

          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              <li>
                <button onClick={() => handleLinkClick('hero')} className={styles.mobileNavLink}>
                  Главная
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('city')} className={styles.mobileNavLink}>
                  О Кемерово
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('footer')} className={styles.mobileNavLink}>
                  Контакты
                </button>
              </li>
            </ul>
          </nav>

          <div className={styles.menuButtons}>
            <button className={`${styles.menuButton} ${styles.buttonOutline}`}>
              <span className={styles.buttonIcon}>📱</span> TG
            </button>
            <button className={`${styles.menuButton} ${styles.buttonOutline}`}>
              <span className={styles.buttonIcon}>💬</span> MAX
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;