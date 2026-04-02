import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ProseContent from "../ProseContent/ProseContent";
import styles from "./Concept.module.scss";

export default function Concept() {
  const { t } = useTranslation();

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
        </motion.div>
        <ProseContent text={t("concept.body")} variant="center" />
      </div>
    </section>
  );
}
