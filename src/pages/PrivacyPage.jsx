import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Shield, Mail, ArrowLeft } from "lucide-react";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./LegalPage.module.scss";

export default function PrivacyPage() {
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
                <Shield size={40} />
              </div>
              <h1>{t("privacy.title")}</h1>
              <p className={styles.intro}>{t("privacy.intro")}</p>
              <p className={styles.updated}>{t("privacy.updated")}</p>
            </div>

            <div className={styles.content}>
              <section>
                <h2>{t("privacy.collect.title")}</h2>
                <ul>
                  {[0, 1, 2, 3].map((i) => (
                    <li key={i}>{t(`privacy.collect.items.${i}`)}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>{t("privacy.use.title")}</h2>
                <ul>
                  {[0, 1, 2, 3].map((i) => (
                    <li key={i}>{t(`privacy.use.items.${i}`)}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>{t("privacy.share.title")}</h2>
                <p>{t("privacy.share.text")}</p>
              </section>

              <section>
                <h2>{t("privacy.rights.title")}</h2>
                <p>{t("privacy.rights.text")}</p>
              </section>

              <section>
                <h2>
                  <Mail size={22} />
                  {t("privacy.contact.title")}
                </h2>
                <p>{t("privacy.contact.text")}</p>
              </section>
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </>
  );
}
