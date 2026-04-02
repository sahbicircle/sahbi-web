import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { UserPlus, UsersRound, MapPin } from "lucide-react";
import styles from "./Section.module.scss";

const ICONS = [UserPlus, UsersRound, MapPin];
const KEYS = ["step1", "step2", "step3"];

export default function HowItWorksSection() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className={`${styles.section} ${styles.bandWarm}`}>
      <div className={styles.bandGlow} aria-hidden />
      <div className={styles.containerWide}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2>{t("howItWorks.title")}</h2>
        </motion.div>

        <div className={styles.grid3}>
          {KEYS.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={key}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={26} strokeWidth={2} />
                </div>
                <h3>{t(`howItWorks.${key}.title`)}</h3>
                <p>{t(`howItWorks.${key}.text`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
