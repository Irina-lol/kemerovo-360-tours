import React from 'react';
import styles from './KemerovoHeart.module.css';
import heartImage from '../../assets/heart.png';

const KemerovoHeart = () => {
  return (
    <section className={styles.heart}>
      <div className={styles.container}>
        <div className={styles.badge}>Столица Кузбасса</div>
        <h2 className={styles.mainTitle}>Кемерово — сердце угольной Сибири</h2>

        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardCircle}></div>
            <h3 className={styles.cardTitle}>Угольная столица</h3>
            <p className={styles.cardDescription}>
              Центр одного из крупнейших угледобывающих регионов России с богатой индустриальной историей и уникальным промышленным наследием
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardCircle}></div>
            <h3 className={styles.cardTitle}>Город на Томи</h3>
            <p className={styles.cardDescription}>
              Живописное расположение на берегах реки Томь с уникальным сочетанием индустриальных панорам и зелёных парков
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardCircle}></div>
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