import React from 'react';
import styles from './KemerovoHeart.module.css';
import heartImage from '../../assets/heart.png';

const KemerovoHeart = () => {
  return (
    <section className={styles.heart} id="kemerovo-heart">
      <div className={styles.container}>
        <div className={styles.badge}>
          <svg className={styles.badgeIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          <span>Столица Кузбасса</span>
        </div>
        <h2 className={styles.mainTitle}>Кемерово — сердце угольной Сибири</h2>

        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardCircle}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L3 8L12 13L21 8L12 3Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M3 13L12 18L21 13" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M3 8L12 13L21 8" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M12 18V23" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                <path d="M8 21H16" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Угольная столица</h3>
            <p className={styles.cardDescription}>
              Центр одного из крупнейших угледобывающих регионов России с богатой индустриальной историей и уникальным промышленным наследием
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardCircle}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M12 3V21" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M6 6L18 18" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M18 6L6 18" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M3 3L21 21" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3L3 21" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Город на Томи</h3>
            <p className={styles.cardDescription}>
              Живописное расположение на берегах реки Томь с уникальным сочетанием индустриальных панорам и зелёных парков
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardCircle}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14 7H19L15 10L17 15L12 12L7 15L9 10L5 7H10L12 2Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
                <path d="M5 19L19 19" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M7 21L17 21" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Шахтёрские традиции</h3>
            <p className={styles.cardDescription}>
              Место, где вековые традиции шахтёрских династий органично встречаются с современной культурой и сибирским гостеприимством
            </p>
          </div>
        </div>

        <h2 className={styles.secondTitle}>Ваш проводник по Кузбассу</h2>

        <div className={styles.guideBlock}>
          <div className={styles.guideImageWrapper}>
            <img src={heartImage} alt="Ольга Кощеева-Бессмертная" className={styles.guideImage} />
          </div>

          <div className={styles.guideContent}>
            <h3 className={styles.guideName}>Ольга Кощеева-Бессмертная</h3>
            <p className={styles.guideDescription}>
              Страсть к путешествиям и глубина познания — это то, что меня влечет. Я аттестованный гид и локальный проводник в городе. Как историк, руководитель школы гидов VISIT KUZBASS и эксперт в индустрии туризма, я помогу вам не только увидеть столицу, но и почувствовать весь этот край.
            </p>
            <p className={styles.guideDescription}>
              <span className={styles.boldText}>Путешествуйте комфортно, открывайте новое, вдохновляйтесь</span> — я покажу вам Кузбасс, который останется в сердце.
            </p>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>1000 +</div>
            <div className={styles.statLabel}>проведено экскурсий</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>18</div>
            <div className={styles.statLabel}>лет опыта</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>уникальных маршрутов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KemerovoHeart;