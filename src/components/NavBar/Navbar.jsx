import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import { Sun, Moon, Monitor, Globe, Menu, X, ChevronDown } from "lucide-react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.scss";

const LANGUAGES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "العربية" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  // const { theme, setTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  // const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  const navItems = [
    { href: isHome ? "#concept" : "/#concept", label: t("nav.concept") },
    { href: isHome ? "#pricing" : "/#pricing", label: t("nav.pricing") },
    { href: isHome ? "#features" : "/#features", label: t("nav.features") },
    { href: isHome ? "#events" : "/#events", label: t("nav.events") },
    { href: isHome ? "#waitlist" : "/#waitlist", label: t("nav.waitlist") },
    { href: isHome ? "#faq" : "/#faq", label: t("nav.faq") },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Logo />

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <div className={styles.navLinks}>
            {navItems.map((item, i) =>
              "href" in item ? (
                <a key={i} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ) : (
                <Link key={i} to={item.to} onClick={closeMenu}>
                  {item.label}
                </Link>
              )
            )}
          </div>

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

            {/* <div className={styles.dropdown}>
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
            </div> */}

            {isHome ? (
              <a
                href="#waitlist"
                className={styles.cta}
                onClick={() => setMenuOpen(false)}
              >
                {t("nav.joinWaitlist")}
              </a>
            ) : (
              <Link
                to="/#waitlist"
                className={styles.cta}
                onClick={() => setMenuOpen(false)}
              >
                {t("nav.joinWaitlist")}
              </Link>
            )}
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
