// City.jsx
import React from 'react';
import styles from './City.module.css';
import human from '../../assets/human.jpg';
import manhourse from '../../assets/manhourse.jpg';
import statue from '../../assets/statue.jpg';
import tallstatue from '../../assets/tallstatue.jpg';
import fire from '../../assets/fire.jpg';
import star from '../../assets/star.jpg';

const City = () => {
  return (
    <section className={styles.city} id="city">
      <div className={styles.container}>
        <div className={styles.badge}>хит продаж</div>

        <h1 className={styles.heroTitle}>«Кемерово 360°»</h1>

        <h2 className={styles.mainTitle}>Откройте город, не теряя времени. Индивидуальная экскурсия-погружение в столице Кузбасса!</h2>

        <p className={styles.description}>
          Вы в Кемерово всего на день-два и хотите составить настоящее, глубокое впечатление о городе, но не знаете, с чего начать? Специально для гостей «Олимп Плаза» создан 2-часовой автомобильный маршрут, который подарит вам полную, связную картину Кемерово.
        </p>
        <p className={styles.description}>
          Это индивидуальное путешествие, которое покажет вам город со всех сторон. Мы поднимемся на смотровые площадки, чтобы охватить Кемерово панорамным взглядом, пройдемся по самым интересным местам и вместе раскроем истории, которые помогут лучше почувствовать его характер и уникальную душу.
        </p>

        <h3 className={styles.sectionTitle}>Что вас ждёт на экскурсии</h3>

        <div className={styles.twoColumns}>
          <div className={styles.column}>
            <div className={styles.contentBlock}>
              <h4 className={styles.blockTitle}>Панорамный взгляд и символы региона</h4>
              <ul className={styles.list}>
                <li>Монумент «Память шахтёрам Кузбасса» работы Эрнста Неизвестного — входит в «Семь чудес Кузбасса»</li>
                <li>Мемориал Воину-освободителю, копия берлинского памятника</li>
                <li>Бронзовый памятник императору Петру I от КАО «Азот»</li>
                <li>Памятник императору Александру III работы Зураба Церетели</li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h4 className={styles.blockTitle}>Архитектурная летопись XX века</h4>
              <ul className={styles.list}>
                <li>Ансамбли сталинской неоклассики, конструктивистский жилой квартал, соцгород и голландское наследие. Архитектура, вписанная в общесоветские тренды с уникальными чертами Кузбасса.</li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h4 className={styles.blockTitle}>Кому подойдет?</h4>
              <ul className={styles.list}>
                <li>Деловым путешественникам с плотным графиком</li>
                <li>Тем, кто приехал впервые и хочет быстро сориентироваться</li>
                <li>Любителям истории, архитектуры и урбанистики</li>
                <li>Гостям, ценящим комфорт и индивидуальный подход</li>
              </ul>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.contentBlock}>
              <h4 className={styles.blockTitle}>Современный пульс города</h4>
              <ul className={styles.list}>
                <li>Пройдемся по новой набережной Томи и Московской площади — это лицо современного Кемерово, его амбиции и устремления в будущее. Увидим, как город развивается и меняет свой облик.</li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h4 className={styles.blockTitle}>           Истории в камне и лицах</h4>
              <ul className={styles.list}>
                <li>Как за неполные 100 лет заштатный город превратился в один из самых значимых центров Сибири. Познакомимся с угольными генералами, инженерами и руководителями, чьи амбиции создали современный Кемерово.</li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h4 className={styles.blockTitle}>Практическая информация</h4>
              <ul className={`${styles.list} ${styles.listNoMarkers}`}>
                <li><strong>Продолжительность:</strong> 2 часа</li>
                <li><strong>Формат:</strong> Индивидуальная экскурсия на комфортабельном автомобиле или автобусе туристического класса</li>
                <li><strong>Бронирование:</strong> В любое удобное время, день в день</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.priceCardsRow}>
          <div className={styles.priceCard}>
            <div className={styles.priceTitle}>Стоимость 1-4 чел. 2 часа</div>
            <div className={styles.priceValue}>7 500 ₽</div>
            <div className={styles.priceIncludes}>Включено: трансфер, экскурсионное сопровождение, карта города</div>
          </div>

          <div className={styles.priceCard}>
            <div className={styles.priceTitle}>Стоимость 1-4 чел. 3 часа</div>
            <div className={styles.priceValue}>9 500 ₽</div>
            <div className={styles.priceIncludes}>Включено: трансфер, экскурсионное сопровождение, карта города</div>
          </div>
        </div>

        <div className={styles.groupPriceCard}>
          <div className={styles.priceTitle}>
            Экскурсия для организованных групп 5 - 50 человек (делегации, форумы, деловые мероприятия)
          </div>
          <div className={styles.priceValue}>2 часа - 7 500 ₽, 3 часа 9500 ₽</div>
          <div className={styles.priceIncludes}>
            Включено: экскурсионное сопровождение, карта города.
          </div>
          <div className={styles.priceNote}>
            Транспорт бронируется дополнительно цена по запросу.
          </div>
        </div>

        <div className={styles.additionalCard}>
          <span className={styles.boldText}>Дополнительно:</span> посещение аутентичного ресторана сибирской кухни, ресторана-пивоварни, сувенирных магазинов или одного из музеев города (оплачивается отдельно).
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
              <img src={human} alt="human" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <img src={manhourse} alt="manhourse" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <img src={statue} alt="statue" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <img src={tallstatue} alt="tallstatue" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <img src={fire} alt="fire" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <img src={star} alt="star" className={styles.galleryImage} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default City;