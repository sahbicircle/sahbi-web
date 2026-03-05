import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Users, MapPin } from "lucide-react";
import styles from "./Hero.module.scss";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={styles.bgOrbs} aria-hidden="true">
        <span className={styles.orb1} />
        <span className={styles.orb2} />
        <span className={styles.orb3} />
      </div>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <MapPin size={14} />
            Marrakech · Mars 2026
          </motion.span>

          <h1>
            {t("hero.slogan").split(",")[0]}
            <br />
            <span className={styles.highlight}>
              {t("hero.slogan").split(",")[1]?.trim()}
            </span>
          </h1>

          <p className={styles.subtitle}>{t("hero.subtitle")}</p>

          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="#waitlist" className={styles.cta}>
              {t("hero.cta")}
            </a>
            <span className={styles.ctaHint}>
              <Users size={18} />
              {t("hero.first100")}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className={styles.phoneMockup}>
            <div className={styles.phoneScreen}>
              <div className={styles.mockContent}>
                <div className={styles.mockAvatar} />
                <div className={styles.mockAvatar} />
                <div className={styles.mockAvatar} />
                <div className={styles.mockText}>Brunch Dimanche</div>
                <div className={styles.mockBtn}>Rejoindre</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
