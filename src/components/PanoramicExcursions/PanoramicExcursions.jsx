import React from 'react';
import styles from './PanoramicExcursions.module.css';

const PanoramicExcursions = () => {
  return (
    <section className={styles.panoramic}>
      <div className={styles.innerContainer}>
        <h2 className={styles.title}>Панорамные экскурсии 360°: что вас ждёт?</h2>
        <p className={styles.description}>
          Погрузитесь в реальную ткань города, где переплетаются история и архитектура, промышленность и экономика, искусство и гастрономия. Каждый маршрут — это авторское путешествие с индивидуальным подходом.
        </p>

        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardNumber}>1</div>
            <h3 className={styles.cardTitle}>Обзорные экскурсии по городу</h3>
            <p className={styles.cardDescription}>
              Мы увидим самые популярные места и рассмотрим городские детали. Зайдём в сувенирную лавку или отправимся в музей. Выбираете Вы, маршрут полностью индивидуальный и подстраивается под ваши интересы.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardNumber}>2</div>
            <h3 className={styles.cardTitle}>Промышленные экскурсии</h3>
            <p className={styles.cardDescription}>
              Посетите угольный разрез или химический завод АЗОТ, чтобы увидеть, как работают промышленные гиганты Кузбасса. Редкая возможность заглянуть в сердце индустрии.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardNumber}>3</div>
            <h3 className={styles.cardTitle}>Экскурсии на целый день</h3>
            <p className={styles.cardDescription}>
              Для тех, кого утомила городская суета и кто хочет оказаться на природе: исследовать древние петроглифы, гулять по заповедному лесу или пировать у гостеприимных хозяев на лучшей сыроварне Кузбасса.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanoramicExcursions;