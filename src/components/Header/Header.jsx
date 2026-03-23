import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'kemerovo-heart',
        'panoramic-excursions',
        'city',
        'depth-kuzbass',
        'kemerovo-foot',
        'footer'
      ];

      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    // { id: 'hero', label: 'Экскурсии Кемерово' },
    { id: 'kemerovo-heart', label: 'Столица Кузбасса' },
    { id: 'panoramic-excursions', label: 'Услуги' },
    { id: 'city', label: 'Кемерово 360° | Авто' },
    { id: 'kemerovo-foot', label: 'Кемерово 360° | Пешком' },
    { id: 'depth-kuzbass', label: 'Глубина 360° | Угольный разрез' },
    { id: 'footer', label: 'Контакты' }
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Кемерово 360°</div>

        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.navItem}>
                <button
                  onClick={() => handleLinkClick(item.id)}
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
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
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.mobileActive : ''}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
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