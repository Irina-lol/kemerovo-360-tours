import React from 'react';
import styles from './City.module.css';

const City = () => {
  return (
    <section className={styles.city} id="city">
      <div className={styles.container}>
        <div className={styles.badge}>
          <svg className={styles.badgeIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
          </svg>
          <span>хит продаж</span>
        </div>

        <div className={styles.headerContent}>
          <h1 className={styles.heroTitle}>Кемерово 360°</h1>
          <h2 className={styles.mainTitle}>Откройте город, не теряя времени. Индивидуальная экскурсия-погружение в столице Кузбасса!</h2>
          <p className={styles.description}>
            Вы в Кемерово всего на день-два и хотите составить настоящее, глубокое впечатление о городе, но не знаете, с чего начать? Специально для гостей создан 2-часовой автомобильный маршрут, который подарит вам полную, связную картину Кемерово.
          </p>
          <p className={styles.description}>
            Это индивидуальное путешествие, которое покажет вам город со всех сторон. Мы поднимемся на смотровые площадки, чтобы охватить Кемерово панорамным взглядом, пройдемся по самым интересным местам и вместе раскроем истории, которые помогут лучше почувствовать его характер и уникальную душу.
          </p>
        </div>

        <h3 className={styles.sectionTitle}>Что вас ждёт на экскурсии</h3>

        <div className={styles.pairedBlocks}>
          <div className={styles.blockPair}>
            <div className={styles.blockPairItem}>
              <div className={styles.blockWithLine}>
                <div className={styles.blockTop}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.blockIcon} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className={styles.line}></div>
                </div>
                <h4 className={styles.blockTitle}>Панорамный взгляд и символы региона</h4>
                <ul className={styles.listWithMarkers}>
                  <li>Монумент «Память шахтёрам Кузбасса» работы Эрнста Неизвестного — входит в «Семь чудес Кузбасса»</li>
                  <li>Мемориал Воину-освободителю, копия берлинского памятника</li>
                  <li>Бронзовый памятник императору Петру I от КАО «Азот»</li>
                  <li>Памятник императору Александру III работы Зураба Церетели</li>
                </ul>
              </div>
            </div>

            <div className={styles.blockPairItem}>
              <div className={styles.blockWithLine}>
                <div className={styles.blockTop}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.blockIcon} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="M12 18H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M9 5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className={styles.line}></div>
                </div>
                <h4 className={styles.blockTitle}>Современный пульс города</h4>
                <ul className={styles.list}>
                  <li>Пройдемся по новой набережной Томи и Московской площади — это лицо современного Кемерово, его амбиции и устремления в будущее. Увидим, как город развивается и меняет свой облик.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.blockPair}>
            <div className={styles.blockPairItem}>
              <div className={styles.blockWithLine}>
                <div className={styles.blockTop}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.blockIcon} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="4" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="M9 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M9 12H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M10 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M14 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M6 20L8 22L12 18L16 22L18 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className={styles.line}></div>
                </div>
                <h4 className={styles.blockTitle}>Архитектурная летопись XX века</h4>
                <ul className={styles.list}>
                  <li>Ансамбли сталинской неоклассики, конструктивистский жилой квартал, соцгород и голландское наследие. Архитектура, вписанная в общесоветские тренды с уникальными чертами Кузбасса.</li>
                </ul>
              </div>
            </div>

            <div className={styles.blockPairItem}>
              <div className={styles.blockWithLine}>
                <div className={styles.blockTop}>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.blockIcon} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20V18H4V4Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                      <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M8 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M8 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M18 22L12 18L6 22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className={styles.line}></div>
                </div>
                <h4 className={styles.blockTitle}>Истории в камне и лицах</h4>
                <ul className={styles.list}>
                  <li>Как за неполные 100 лет заштатный город превратился в один из самых значимых центров Сибири. Познакомимся с угольными генералами, инженерами и руководителями, чьи амбиции создали современный Кемерово.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.blockPair}>
            <div className={styles.blockPairItem}>
              <div className={styles.blockWithoutLine}>
                <h4 className={styles.blockTitleNoLine}>Кому подойдет?</h4>
                <ul className={styles.listWithMarkers}>
                  <li>Деловым путешественникам с плотным графиком</li>
                  <li>Тем, кто приехал впервые и хочет быстро сориентироваться</li>
                  <li>Любителям истории, архитектуры и урбанистики</li>
                  <li>Гостям, ценящим комфорт и индивидуальный подход</li>
                </ul>
              </div>
            </div>

            <div className={styles.blockPairItem}>
              <div className={styles.blockWithoutLine}>
                <h4 className={styles.blockTitleNoLine}>Практическая информация</h4>
                <ul className={styles.listNoMarkers}>
                  <li><strong>Продолжительность:</strong> 2 часа</li>
                  <li><strong>Формат:</strong> Индивидуальная экскурсия на комфортабельном автомобиле или автобусе туристического класса</li>
                  <li><strong>Бронирование:</strong> В любое удобное время, день в день</li>
                </ul>
              </div>
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

      </div>
    </section>
  );
};

export default City;