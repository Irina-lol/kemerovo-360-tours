// DepthKuzbass.jsx
import React from 'react';
import styles from './DepthKuzbass.module.css';
import depthImage from '../../assets/depthno.jpg';
import depth1 from '../../assets/depth.png';
import depth2 from '../../assets/dep.jpg';
import depth3 from '../../assets/dept.jpg';
import depth4 from '../../assets/depthgo.jpg';
import depth5 from '../../assets/depthzd.jpg';
import depth6 from '../../assets/wheel.png';

const DepthKuzbass = () => {
  return (
    <section className={styles.depth} id="depth-kuzbass">
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>

          <div className={styles.badge}>Промышленный туризм</div>

          <h2 className={styles.mainTitle}>«Глубина 360: угольная история Кузбасса»</h2>

          <h3 className={styles.subTitle}>Промышленная экскурсия на угольный разрез: загляните в сердце угледобычи!</h3>

          <p className={styles.description}>
            Редкая возможность отправиться на Кедровский угольный разрез, где вы увидите, как добывается «чёрное золото» страны. Огромные карьерные самосвалы, мощные экскаваторы и многотонные буровые установки в действии!
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.cardArrow}>➡️</div>
              <h4 className={styles.cardTitle}>Экскурсия по городу</h4>
              <p className={styles.cardDescription}>
                С акцентом на экономике угольной индустрии и остановками у памятника Михайле Волкову и Мемориала «Память шахтерам Кузбасса»
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardArrow}>➡️</div>
              <h4 className={styles.cardTitle}>Кедровский разрез</h4>
              <p className={styles.cardDescription}>
                Производственный процесс от А до Я: добыча угля, транспортировка и переработка на крупнейшем предприятии
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardArrow}>➡️</div>
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

          <div className={styles.buttonsGroup}>
            <button className={`${styles.button} ${styles.buttonOutline}`}>
              <span className={styles.buttonIcon}>📱</span> Забронировать TG
            </button>
            <button className={`${styles.button} ${styles.buttonOutline}`}>
              <span className={styles.buttonIcon}>💬</span> Забронировать MAX
            </button>
            <button className={`${styles.button} ${styles.buttonFilled}`}>
              <span className={styles.buttonIcon}>📞</span> 89235003020
            </button>
          </div>

          <div className={styles.imageGallery}>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <img src={depth1} alt="Угольный разрез" className={styles.galleryImage} />
              </div>
              <div className={styles.galleryItem}>
                <img src={depth2} alt="Угольный разрез" className={styles.galleryImage} />
              </div>
              <div className={styles.galleryItem}>
                <img src={depth3} alt="Угольный разрез" className={styles.galleryImage} />
              </div>
              <div className={styles.galleryItem}>
                <img src={depth4} alt="Угольный разрез" className={styles.galleryImage} />
              </div>
              <div className={styles.galleryItem}>
                <img src={depth5} alt="Угольный разрез" className={styles.galleryImage} />
              </div>
              <div className={styles.galleryItem}>
                <img src={depth6} alt="Угольный разрез" className={styles.galleryImage} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DepthKuzbass;