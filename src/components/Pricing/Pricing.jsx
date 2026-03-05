import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import styles from "./Pricing.module.scss";

export default function Pricing() {
  const { t } = useTranslation();

  const plans = [
    {
      key: "standard",
      popular: false,
    },
    {
      key: "premium",
      popular: true,
    },
  ];

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
          {plans.map((plan, i) => (
            <motion.div
              key={plan.key}
              className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {plan.popular && (
                <span className={styles.badge}>
                  <Sparkles size={14} />
                  {t("pricing.popular")}
                </span>
              )}
              <h3>{t(`pricing.${plan.key}.name`)}</h3>
              <p className={styles.tagline}>{t(`pricing.${plan.key}.tagline`)}</p>
              <div className={styles.price}>
                <span className={styles.amount}>
                  {t(`pricing.${plan.key}.price`)}
                </span>
                <span className={styles.currency}>
                  {t(`pricing.${plan.key}.currency`)}
                </span>
              </div>
              <ul className={styles.features}>
                {[0, 1, 2, 3].map((idx) => (
                  <li key={idx}>
                    <Check size={18} />
                    {t(`pricing.${plan.key}.features.${idx}`)}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className={styles.cta}>
                {t("nav.joinWaitlist")}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
