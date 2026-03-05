import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  UserPlus,
  Calendar,
  Unlock,
  MessageCircle,
  Star,
} from "lucide-react";
import styles from "./Features.module.scss";

const FEATURE_KEYS = [
  "onboarding",
  "booking",
  "unlock",
  "chat",
  "trust",
];

const ICONS = [UserPlus, Calendar, Unlock, MessageCircle, Star];

export default function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t("features.title")}</h2>
          <p className={styles.subtitle}>{t("features.subtitle")}</p>
        </motion.div>

        <div className={styles.grid}>
          {FEATURE_KEYS.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={key}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={28} />
                </div>
                <h3>{t(`features.${key}.title`)}</h3>
                <p>{t(`features.${key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
