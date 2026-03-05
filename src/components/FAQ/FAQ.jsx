import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import styles from "./FAQ.module.scss";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const items = [1, 2, 3, 4, 5, 6];

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.bgPattern} aria-hidden="true" />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HelpCircle size={36} className={styles.icon} />
          <h2>{t("faq.title")}</h2>
          <p>{t("faq.subtitle")}</p>
        </motion.div>

        <div className={styles.list}>
          {items.map((i) => (
            <motion.div
              key={i}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                className={`${styles.question} ${openIndex === i ? styles.open : ""}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{t(`faq.q${i}`)}</span>
                <ChevronDown size={22} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{t(`faq.a${i}`)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
