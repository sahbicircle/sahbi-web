import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          Sahb<span className={styles.logoDot}>i</span>
        </a>
        <p className={styles.tagline}>{t("footer.tagline")}</p>
        <p className={styles.rights}>{t("footer.rights")}</p>
      </div>
    </footer>
  );
}
