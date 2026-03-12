import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Users, MapPin } from "lucide-react";
import styles from "./Hero.module.scss";

const HERO_BG =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div
        className={styles.bgImage}
        style={{ backgroundImage: `url(${HERO_BG})` }}
        aria-hidden="true"
      />
      <div className={styles.bgOverlay} aria-hidden="true" />
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <MapPin size={16} />
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="#waitlist" className={styles.cta}>
              {t("hero.cta")}
            </a>
            <span className={styles.ctaHint}>
              <Users size={20} />
              {t("hero.first100")}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
