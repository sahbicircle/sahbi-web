import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ProseContent from "../ProseContent/ProseContent";
import styles from "./Section.module.scss";

export default function ProblemSection() {
  const { t } = useTranslation();

  return (
    <section id="problem" className={`${styles.section} ${styles.bandWarm}`}>
      <div className={styles.bandGlow} aria-hidden />
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2>{t("problem.title")}</h2>
        </motion.div>
        <ProseContent text={t("problem.body")} variant="editorial" />
      </div>
    </section>
  );
}
