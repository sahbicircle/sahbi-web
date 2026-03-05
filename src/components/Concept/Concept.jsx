import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Heart, Users, UtensilsCrossed } from "lucide-react";
import styles from "./Concept.module.scss";

export default function Concept() {
  const { t } = useTranslation();

  const items = [
    {
      icon: Heart,
      key: "promise",
      text: t("concept.promise"),
    },
    {
      icon: Users,
      key: "experience",
      text: t("concept.experience"),
    },
    {
      icon: UtensilsCrossed,
      key: "meaning",
      text: t("concept.meaning"),
    },
  ];

  return (
    <section id="concept" className={styles.concept}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t("concept.title")}</h2>
          <p className={styles.subtitle}>{t("concept.subtitle")}</p>
        </motion.div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <motion.div
              key={item.key}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.iconWrap}>
                <item.icon size={24} />
              </div>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
