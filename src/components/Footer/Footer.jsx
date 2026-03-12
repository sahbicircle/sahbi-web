import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo className={styles.logoImg} />
        <p className={styles.tagline}>{t("footer.tagline")}</p>
        <div className={styles.links}>
          <Link to="/privacy">{t("nav.privacy")}</Link>
          <span className={styles.sep}>·</span>
          <Link to="/terms">{t("nav.terms")}</Link>
        </div>
        <p className={styles.rights}>{t("footer.rights")}</p>
      </div>
    </footer>
  );
}
