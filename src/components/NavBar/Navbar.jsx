import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.scss";

const LANGUAGES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "العربية" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Logo />

        <nav className={styles.nav} aria-label="Primary">
          {!isHome && (
            <Link to="/" className={styles.homeLink}>
              {t("nav.home")}
            </Link>
          )}

          <div className={styles.actions}>
            <div className={styles.dropdown}>
              <button
                type="button"
                className={styles.iconBtn}
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Language"
                aria-expanded={langOpen}
              >
                <Globe size={20} />
              </button>
              {langOpen && (
                <div className={styles.dropdownMenu}>
                  {LANGUAGES.map(({ code, label }) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => {
                        i18n.changeLanguage(code);
                        setLangOpen(false);
                      }}
                      className={styles.dropdownItem}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {isHome ? (
              <a href="#waitlist" className={styles.cta}>
                {t("nav.joinWaitlist")}
              </a>
            ) : (
              <Link to="/#waitlist" className={styles.cta}>
                {t("nav.joinWaitlist")}
              </Link>
            )}
          </div>
        </nav>
      </div>

      {langOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close"
          onClick={() => setLangOpen(false)}
        />
      )}
    </header>
  );
}
