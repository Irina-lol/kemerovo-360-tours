import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainSection}>
          <div className={styles.infoBlock}>
            <h3 className={styles.title}>Кемерово 360°</h3>
            <p className={styles.description}>
              Авторские экскурсии по столице Кузбасса<br />
              от профессионального гида-историка
            </p>
            <div className={styles.guideInfo}>
              <p className={styles.guideName}>Ольга Кощеева Бессмертная</p>
              <p className={styles.guideCreds}>
                Аттестованный гид<br />
                Руководитель школы гидов VISIT KUZBASS
              </p>
            </div>
          </div>

          <div className={styles.contactsBlock}>
            <h4 className={styles.subtitle}>Свяжитесь с гидом</h4>
            <a href="tel:89235003020" className={styles.phone}>
              89235003020
            </a>

            <div className={styles.socialButtons}>
              <button className={`${styles.socialBtn} ${styles.tg}`}>
                Написать в TG
              </button>
              <button className={`${styles.socialBtn} ${styles.max}`}>
                Написать в MAX
              </button>
            </div>
          </div>

          <div className={styles.subscribeBlock}>
            <h4 className={styles.subtitle}>Будьте в курсе</h4>
            <p className={styles.subscribeText}>
              Подпишитесь на рассылку экскурсий и событий Кемерово 360°
            </p>
            <div className={styles.subscribeButtons}>
              <button className={`${styles.subscribeBtn} ${styles.tg}`}>
                Написать в TG
              </button>
              <button className={`${styles.subscribeBtn} ${styles.max}`}>
                Написать в MAX
              </button>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            2026 Кемерово 360°. Все права защищены
          </p>
          <p className={styles.madeWith}>
            Made with ❤️ в Кузбассе
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;