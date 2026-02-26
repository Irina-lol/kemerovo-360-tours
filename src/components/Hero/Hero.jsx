import React from 'react';
import styles from './Hero.module.css';
import heroImage from '../../assets/hero.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Экскурсии в Кемерово на 360° | Гид Ольга Кощеева-Бессмертная
          </h1>
          <p className={styles.description}>
            Полный круг впечатлений, который сливается в единый маршрут, открывая город с неожиданных ракурсов и даря глубокое понимание его истинной природы. Авторские экскурсии по столице Кузбасса от профессионального гида-историка.
          </p>
          <div className={styles.buttonGroup}>
            <button className={`${styles.button} ${styles.buttonPrimary}`}>
              Задать вопрос
            </button>
            <button className={`${styles.button} ${styles.buttonSecondary}`}>
              Все маршруты
            </button>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src={heroImage} alt="Экскурсии в Кемерово" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default Hero;