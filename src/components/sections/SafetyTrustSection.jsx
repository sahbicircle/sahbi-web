import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BadgeCheck, Building2, Users, Gem } from "lucide-react";
import styles from "./Section.module.scss";

const ICONS = [BadgeCheck, Building2, Users, Gem];
const KEYS = ["point1", "point2", "point3", "point4"];

export default function SafetyTrustSection() {
  const { t } = useTranslation();

  return (
    <section id="safety" className={`${styles.section} ${styles.bandCool}`}>
      <div className={styles.containerWide}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2>{t("safety.title")}</h2>
        </motion.div>

        <div className={styles.grid4}>
          {KEYS.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={key}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={26} strokeWidth={2} />
                </div>
                <h3>{t(`safety.${key}.title`)}</h3>
                <p>{t(`safety.${key}.text`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
