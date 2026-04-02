import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ProseContent from "../ProseContent/ProseContent";
import styles from "./Section.module.scss";

export default function WhatSahbiSection() {
  const { t } = useTranslation();

  return (
    <section id="what-sahbi" className={`${styles.section} ${styles.bandCool}`}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2>{t("whatSahbi.title")}</h2>
        </motion.div>
        <ProseContent text={t("whatSahbi.body")} variant="editorial" />
      </div>
    </section>
  );
}
