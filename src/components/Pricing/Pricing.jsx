import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import styles from "./Pricing.module.scss";

const PLAN_KEYS = ["standard", "premium", "payPerEvent", "payPerEventPrem"];

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t("pricing.title")}</h2>
          <p className={styles.subtitle}>{t("pricing.subtitle")}</p>
        </motion.div>

        <div className={styles.grid}>
          {PLAN_KEYS.map((key, i) => {
            const popular = key === "premium";
            const features = t(`pricing.${key}.features`, {
              returnObjects: true,
            });
            const list = Array.isArray(features) ? features : [];
            return (
              <motion.div
                key={key}
                className={`${styles.card} ${popular ? styles.popular : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                {popular && (
                  <span className={styles.badge}>
                    <Sparkles size={14} />
                    {t("pricing.popular")}
                  </span>
                )}
                <h3>{t(`pricing.${key}.name`)}</h3>
                <div className={styles.price}>
                  <span className={styles.amount}>
                    {t(`pricing.${key}.price`)}
                  </span>
                  <span className={styles.currency}>
                    {t(`pricing.${key}.currency`)}
                  </span>
                </div>
                <ul className={styles.features}>
                  {list.map((line, idx) => (
                    <li key={idx}>
                      <Check size={18} aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                {key === "standard" && (
                  <p className={styles.exclusionNote}>
                    {t("pricing.standard.exclusionNote")}
                  </p>
                )}
                <p className={styles.audience}>{t(`pricing.${key}.audience`)}</p>
                <a href="#waitlist" className={styles.cta}>
                  {t("nav.joinWaitlist")}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
