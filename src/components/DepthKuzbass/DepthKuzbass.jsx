import React from 'react';
import styles from './DepthKuzbass.module.css';
import depthImage from '../../assets/depthno.jpg';

const DepthKuzbass = () => {
  return (
    <section className={styles.depth} id="depth-kuzbass">
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>

          <div className={styles.badge}>
            <svg className={styles.badgeIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
              <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
              <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
              <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <span>Промышленный туризм</span>
          </div>

          <h2 className={styles.mainTitle}>Глубина 360: угольная история Кузбасса</h2>

          <h3 className={styles.subTitle}>Промышленная экскурсия на угольный разрез: загляните в сердце угледобычи!</h3>

          <p className={styles.description}>
            Редкая возможность отправиться на Кедровский угольный разрез, где вы увидите, как добывается «чёрное золото» страны. Огромные карьерные самосвалы, мощные экскаваторы и многотонные буровые установки в действии!
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.cardArrow}>
                <svg className={styles.arrowIcon} width="48" height="48" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20 L90 20 L90 25 L85 25 L85 55 L90 55 L90 60 L10 60 L10 55 L15 55 L15 25 L10 25 L10 20Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M15 25 L15 55" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M85 25 L85 55" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 25 L20 55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M80 25 L80 55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M30 20 L30 15 L70 15 L70 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M45 20 L45 12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M55 20 L55 12" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className={styles.cardTitle}>Экскурсия по городу</h4>
              <p className={styles.cardDescription}>
                С акцентом на экономике угольной индустрии и остановками у памятника Михайле Волкову и Мемориала «Память шахтерам Кузбасса»
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardArrow}>
                <svg className={styles.arrowIcon} width="48" height="48" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20 L90 20 L90 25 L85 25 L85 55 L90 55 L90 60 L10 60 L10 55 L15 55 L15 25 L10 25 L10 20Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M15 25 L15 55" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M85 25 L85 55" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 25 L20 55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M80 25 L80 55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M30 20 L30 15 L70 15 L70 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M45 20 L45 12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M55 20 L55 12" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className={styles.cardTitle}>Кедровский разрез</h4>
              <p className={styles.cardDescription}>
                Производственный процесс от А до Я: добыча угля, транспортировка и переработка на крупнейшем предприятии
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardArrow}>
                <svg className={styles.arrowIcon} width="48" height="48" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20 L90 20 L90 25 L85 25 L85 55 L90 55 L90 60 L10 60 L10 55 L15 55 L15 25 L10 25 L10 20Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M15 25 L15 55" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M85 25 L85 55" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 25 L20 55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M80 25 L80 55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M30 20 L30 15 L70 15 L70 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M45 20 L45 12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M55 20 L55 12" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className={styles.cardTitle}>Уникальные фото</h4>
              <p className={styles.cardDescription}>
                Захватывающие кадры на фоне крупнейших карьерных машин и панорам разреза
              </p>
            </div>
          </div>

          <div className={styles.twoColumns}>
            <div className={styles.leftColumn}>
              <div className={styles.infoBlock}>
                <h4 className={styles.infoTitle}>Что включено</h4>
                <ul className={styles.list}>
                  <li>Трансфер до объекта и обратно</li>
                  <li>Специальная экипировка для безопасности</li>
                  <li>Сопровождение профессионального гида</li>
                  <li>Знакомство с технологиями и экологией</li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h4 className={styles.infoTitle}>Кому будет интересно?</h4>
                <ul className={styles.list}>
                  <li>Тем, кто интересуется промышленностью и техникой</li>
                  <li>Любителям нестандартных маршрутов и крутых фото</li>
                  <li>Школьникам 14+ и студентам — познавательная экскурсия по профессиям будущего</li>
                </ul>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.imageWrapper}>
                <img src={depthImage} alt="Кедровский угольный разрез" className={styles.depthImage} />
              </div>
            </div>
          </div>

          <div className={styles.infoCardsGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoCardLabel}>Продолжительность</div>
              <div className={styles.infoCardValue}>4 часа</div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoCardLabel}>Формат</div>
              <div className={styles.infoCardValue}>Групповая экскурсия от 10 человек</div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoCardLabel}>Бронирование</div>
              <div className={styles.infoCardValue}>За 3 дня до даты</div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoCardLabel}>Стоимость</div>
              <div className={styles.infoCardValue}>3 500 ₽ на человека</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DepthKuzbass;