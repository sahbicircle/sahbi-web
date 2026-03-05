import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import { Sun, Moon, Monitor, Globe, Menu, X } from "lucide-react";
import styles from "./Navbar.module.scss";

const LANGUAGES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "العربية" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          Sahb<span className={styles.logoDot}>i</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="#concept" onClick={() => setMenuOpen(false)}>
            {t("nav.concept")}
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            {t("nav.pricing")}
          </a>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            {t("nav.features")}
          </a>
          <a href="#waitlist" onClick={() => setMenuOpen(false)}>
            {t("nav.waitlist")}
          </a>
          <a href="#privacy" onClick={() => setMenuOpen(false)}>
            {t("nav.privacy")}
          </a>

          <div className={styles.actions}>
            <div className={styles.dropdown}>
              <button
                className={styles.iconBtn}
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Language"
              >
                <Globe size={20} />
              </button>
              {langOpen && (
                <div className={styles.dropdownMenu}>
                  {LANGUAGES.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => {
                        i18n.changeLanguage(code);
                        setLangOpen(false);
                        setMenuOpen(false);
                      }}
                      className={styles.dropdownItem}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.dropdown}>
              <button
                className={styles.iconBtn}
                onClick={() => setThemeOpen(!themeOpen)}
                aria-label="Theme"
              >
                <ThemeIcon size={20} />
              </button>
              {themeOpen && (
                <div className={styles.dropdownMenu}>
                  {[
                    { id: "light", icon: Sun, labelKey: "theme.light" },
                    { id: "dark", icon: Moon, labelKey: "theme.dark" },
                    { id: "system", icon: Monitor, labelKey: "theme.system" },
                  ].map(({ id, icon: Icon, labelKey }) => (
                    <button
                      key={id}
                      onClick={() => {
                        setTheme(id);
                        setThemeOpen(false);
                      }}
                      className={`${styles.dropdownItem} ${
                        theme === id ? styles.active : ""
                      }`}
                    >
                      <Icon size={16} />
                      {t(labelKey)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#waitlist"
              className={styles.cta}
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.joinWaitlist")}
            </a>
          </div>
        </nav>

        <button
          className={styles.mobileToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {(langOpen || themeOpen) && (
        <div
          className={styles.backdrop}
          onClick={() => {
            setLangOpen(false);
            setThemeOpen(false);
          }}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
