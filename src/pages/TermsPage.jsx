import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./LegalPage.module.scss";

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={20} />
            {t("nav.back")}
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.header}>
              <div className={styles.iconWrap}>
                <FileText size={40} />
              </div>
              <h1>{t("terms.title")}</h1>
              <p className={styles.intro}>{t("terms.intro")}</p>
              <p className={styles.updated}>{t("terms.updated")}</p>
            </div>

            <div className={styles.content}>
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <section key={i}>
                  <h2>{t(`terms.sections.${i}.title`)}</h2>
                  <p>{t(`terms.sections.${i}.content`)}</p>
                </section>
              ))}
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </>
  );
}
