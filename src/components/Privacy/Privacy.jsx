import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Shield, Mail } from "lucide-react";
import styles from "./Privacy.module.scss";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <section id="privacy" className={styles.privacy}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.iconWrap}>
            <Shield size={32} />
          </div>
          <h2>{t("privacy.title")}</h2>
          <p className={styles.intro}>{t("privacy.intro")}</p>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.block}>
            <h3>{t("privacy.collect.title")}</h3>
            <ul>
              {[0, 1, 2, 3].map((i) => (
                <li key={i}>{t(`privacy.collect.items.${i}`)}</li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h3>{t("privacy.use.title")}</h3>
            <ul>
              {[0, 1, 2, 3].map((i) => (
                <li key={i}>{t(`privacy.use.items.${i}`)}</li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h3>{t("privacy.share.title")}</h3>
            <p>{t("privacy.share.text")}</p>
          </div>

          <div className={styles.block}>
            <h3>{t("privacy.rights.title")}</h3>
            <p>{t("privacy.rights.text")}</p>
          </div>

          <div className={`${styles.block} ${styles.contact}`}>
            <h3>
              <Mail size={20} />
              {t("privacy.contact.title")}
            </h3>
            <p>{t("privacy.contact.text")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
