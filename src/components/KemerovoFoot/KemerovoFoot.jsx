import React from 'react';
import styles from './KemerovoFoot.module.css';

const KemerovoFoot = () => {
  return (
    <section className={styles.foot} id="kemerovo-foot">
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>

          <h2 className={styles.mainTitle}>Кемерово 360°: пешком</h2>

          <h3 className={styles.subTitle}>
            Лучшее соотношение цены и качества для глубокого погружения в атмосферу города
          </h3>

          <p className={styles.description}>
            Идеально для первого визита: максимум смысла за разумный бюджет и время. За одну прогулку вы поймёте, чем Кемерово похож на типичный советский город, а что в нём совершенно своё.
          </p>

          <h4 className={styles.sectionTitle}>Что вас ждёт на маршруте</h4>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardSquare}></div>
                <h5 className={styles.cardTitle}>Исторический Центр</h5>
              </div>
              <ul className={styles.list}>
                <li>Библиотека и панно «Сумма технологий» — футуристический символ науки Кузбасса</li>
                <li>Памятник Михайло Волкову — первооткрывателю кузнецких углей</li>
                <li>Гигантский БЕЛАЗ — символ угольной промышленности в центре города</li>
                <li>Бульвар на ул. Весенней — городская гостиная с архитектурой</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardSquare}></div>
                <h5 className={styles.cardTitle}>Культурное достояние</h5>
              </div>
              <ul className={styles.list}>
                <li>Драмтеатр и Театр кукол — архитектурные жемчужины</li>
                <li>Ансамбли сталинской неоклассики и Площадь Советов</li>
                <li>Площадь Пушкина и квартал Эрнста Мая (Соцгород)</li>
                <li>Филармония Кузбасса и площадь Искусств</li>
              </ul>
            </div>
          </div>

          <div className={styles.twoColumns}>
            <div className={styles.column}>
              <h5 className={styles.columnTitle}>Кому подойдет</h5>
              <p className={styles.columnText}>
                Идеально для тех, кто хочет получить максимально полное знакомство с Кемерово простым языком, с ясными связями «история, экономика, архитектура и искусство». Легкая активность и понимание Кузбасса через живую городскую среду.
              </p>
            </div>

            <div className={styles.column}>
              <h5 className={styles.columnTitle}>Практическая информация</h5>
              <ul className={styles.infoList}>
                <li><strong>Расписание:</strong> Каждую субботу в 12:00</li>
                <li><strong>Место сбора:</strong> Памятник Михайло Волкову (пл. Волкова)</li>
                <li><strong>Завершение:</strong> пл. Искусств</li>
                <li><strong>Группа:</strong> До 20 человек, состоится при любом количестве</li>
                <li><strong>Сложность:</strong> 3 км по ровной местности</li>
              </ul>
            </div>
          </div>

          <div className={styles.priceCardsRow}>
            <div className={styles.priceCard}>
              <div className={styles.priceCardLabel}>Стоимость</div>
              <div className={styles.priceCardValue}>1 500 ₽ на человека</div>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.priceCardLabel}>Включено</div>
              <div className={styles.priceCardValue}>Экскурсионное сопровождение, дизайнерская открытка и карта города в подарок</div>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.priceCardLabel}>Дополнительно</div>
              <div className={styles.priceCardValue}>Марка для открытки 30-50 ₽ (по желанию)</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KemerovoFoot;