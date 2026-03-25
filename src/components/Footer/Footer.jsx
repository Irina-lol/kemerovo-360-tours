import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>

        <h2 className={styles.mainTitle}>Забронируйте экскурсию</h2>

        <p className={styles.description}>
          Выберите удобный формат знакомства с Кемерово и Кузбассом. Индивидуальные и групповые экскурсии, онлайн-туры с интерактивным сопровождением, специальные предложения для корпоративных групп.
        </p>

        <div className={styles.cardsRow}>
          <div className={styles.card}>
            <div className={styles.cardCircle}>
              <svg className={styles.cardIcon} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20V18H4V4Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                <path d="M8 8H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 12H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 16H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M18 22L12 18L6 22" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Удобное бронирование</h3>
            <p className={styles.cardText}>
              Выберите дату и время экскурсии в удобной форме записи. Бронирование индивидуальных туров возможно день в день
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardCircle}>
              <svg className={styles.cardIcon} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="2" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Специальные предложения</h3>
            <p className={styles.cardText}>
              Сезонные акции, корпоративные программы и подарочные сертификаты на экскурсии по Кузбассу
            </p>
          </div>
        </div>

        <h3 className={styles.contactTitle}>Контакты и социальные сети</h3>

        <div className={styles.twoColumns}>
          <div className={styles.leftColumn}>
            <h4 className={styles.columnTitle}>Свяжитесь с гидом</h4>
            <div className={styles.phone}>8 923 500 30 20</div>
            <p className={styles.columnText}>
              Аттестованный гид, руководитель школы гидов VISIT KUZBASS
            </p>
            <p className={styles.columnText}>
              Отвечу на все вопросы и помогу выбрать идеальный маршрут
            </p>

            <div className={styles.verticalButtons}>
              <button className={`${styles.button} ${styles.buttonBrown}`}>
                <span className={styles.buttonIcon}>📱</span> Написать в TG
              </button>
              <button className={`${styles.button} ${styles.buttonBrown}`}>
                <span className={styles.buttonIcon}>💬</span> Написать в MAX
              </button>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <h4 className={styles.columnTitle}>Будьте в курсе</h4>
            <p className={styles.columnText}>
              Подпишитесь на рассылку экскурсий и событий Кемерово 360°
            </p>
            <p className={styles.columnText}>
              Анонсы новых маршрутов, специальные предложения и городские истории
            </p>

            <div className={styles.verticalButtons}>
              <button className={`${styles.button} ${styles.buttonBrown}`}>
                <span className={styles.buttonIcon}>📱</span> Подписаться в TG
              </button>
              <button className={`${styles.button} ${styles.buttonBrown}`}>
                <span className={styles.buttonIcon}>💬</span> Подписаться в MAX
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;