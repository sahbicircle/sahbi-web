import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  Menu,
  X,
} from "lucide-react";
import styles from "./Hero.module.scss";
import logoWhite from "../../assets/logo/logo sahbi1.svg";

const HERO_BG =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85";

const LANGUAGES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "العربية" },
];

function TikTokIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64v-3.5a6.33 6.33 0 0 0-1-.1 6.34 6.34 0 1 0 6.34 6.34V7.93a8.16 8.16 0 0 0 4.77 1.52v-3.5a4.85 4.85 0 0 1-1-.26z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const isHome = location.pathname === "/";

  const centerLinks = [
    { href: isHome ? "#concept" : "/#concept", label: t("nav.concept") },
    { href: isHome ? "#pricing" : "/#pricing", label: t("nav.pricing") },
    { href: isHome ? "#features" : "/#features", label: t("nav.features") },
    { href: isHome ? "#events" : "/#events", label: t("nav.events") },
    { href: isHome ? "#waitlist" : "/#waitlist", label: t("nav.waitlist") },
    { href: isHome ? "#faq" : "/#faq", label: t("nav.faq") },
  ];

  const tickerSegment = t("hero.ticker");

  return (
    <section className={styles.hero}>
      <div className={styles.gradientWrap}>
        <div className={styles.card}>
          <div
            className={styles.media}
            style={{ backgroundImage: `url(${HERO_BG})` }}
          >
            <div className={styles.mediaTint} aria-hidden="true" />

            <header className={styles.topBar}>
              <Link to="/" className={styles.brand}>
                <img src={logoWhite} alt="Sahbi" className={styles.brandLogo} />
              </Link>

              <nav
                className={`${styles.navPill} ${
                  mobileNavOpen ? styles.navPillOpen : ""
                }`}
                aria-label="Primary"
              >
                {centerLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className={styles.navLink}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className={styles.actions}>
                <div className={styles.langWrap}>
                  <button
                    type="button"
                    className={styles.langBtn}
                    onClick={() => setLangOpen(!langOpen)}
                    aria-expanded={langOpen}
                    aria-label="Language"
                  >
                    <Globe size={18} strokeWidth={2} />
                  </button>
                  <AnimatePresence>
                    {langOpen && (
                      <Motion.div
                        className={styles.langMenu}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                      >
                        {LANGUAGES.map(({ code, label }) => (
                          <button
                            key={code}
                            type="button"
                            className={styles.langItem}
                            onClick={() => {
                              i18n.changeLanguage(code);
                              setLangOpen(false);
                            }}
                          >
                            {label}
                          </button>
                        ))}
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  className={styles.mobileToggle}
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  aria-expanded={mobileNavOpen}
                  aria-label={mobileNavOpen ? "Close menu" : "Menu"}
                >
                  {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </header>

            <div className={styles.body}>
              <Motion.div
                className={styles.copy}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className={styles.headline}>{t("hero.headline")}</h1>
                <p className={styles.lead}>{t("hero.lead")}</p>
                <ul className={styles.bullets}>
                  <li>{t("hero.bullet1")}</li>
                  <li>{t("hero.bullet2")}</li>
                  <li>{t("hero.bullet3")}</li>
                </ul>
              </Motion.div>

              <div className={styles.bottomBand}>
                <div className={styles.socials}>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label="Facebook"
                  >
                    <Facebook size={18} strokeWidth={1.75} />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label="TikTok"
                  >
                    <TikTokIcon size={18} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label="Instagram"
                  >
                    <Instagram size={18} strokeWidth={1.75} />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label="X"
                  >
                    <Twitter size={18} strokeWidth={1.75} />
                  </a>
                </div>

                <Motion.div
                  className={styles.ctaBlock}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a href="#waitlist" className={styles.ctaPrimary}>
                    {t("hero.ctaPrimary")}
                  </a>
                  <a href="#concept" className={styles.learnMore}>
                    <span>{t("hero.learnMore")}</span>
                    <span className={styles.learnArrow} aria-hidden>
                      ———→
                    </span>
                  </a>
                  <p className={styles.betaCaption}>{t("hero.betaCaption")}</p>
                </Motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ticker} aria-hidden="true">
          <div className={styles.tickerTrack}>
            {[0, 1].map((half) => (
              <div key={half} className={styles.tickerHalf}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className={styles.tickerItem}>
                    {tickerSegment}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {(langOpen || mobileNavOpen) && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close"
          onClick={() => {
            setLangOpen(false);
            setMobileNavOpen(false);
          }}
        />
      )}
    </section>
  );
}
