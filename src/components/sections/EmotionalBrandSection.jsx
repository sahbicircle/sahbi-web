import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ProseContent from "../ProseContent/ProseContent";
import styles from "./Section.module.scss";

export default function EmotionalBrandSection() {
  const { t } = useTranslation();

  return (
    <section id="emotional" className={`${styles.section} ${styles.bandEmotional}`}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2>{t("emotional.title")}</h2>
        </motion.div>
        <ProseContent text={t("emotional.body")} variant="editorial" />
      </div>
    </section>
  );
}
