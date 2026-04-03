import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Phone, Gift, ChevronDown } from "lucide-react";
import ProseContent from "../ProseContent/ProseContent";
import styles from "./Waitlist.module.scss";

const PHONE_PREFIXES = [
  { value: "+212", flag: "MA", label: "Maroc" },
  { value: "+33", flag: "FR", label: "France" },
  { value: "+1", flag: "US", label: "États-Unis" },
  { value: "+44", flag: "GB", label: "Royaume-Uni" },
  { value: "+34", flag: "ES", label: "Espagne" },
  { value: "+39", flag: "IT", label: "Italie" },
  { value: "+49", flag: "DE", label: "Allemagne" },
  { value: "+32", flag: "BE", label: "Belgique" },
  { value: "+31", flag: "NL", label: "Pays-Bas" },
  { value: "+213", flag: "DZ", label: "Algérie" },
  { value: "+216", flag: "TN", label: "Tunisie" },
];

function Flag({ code }) {
  const [flag, setFlag] = useState("");
  useEffect(() => {
    if (code && code.length === 2) {
      const region = code.toUpperCase();
      const flagEmoji = String.fromCodePoint(
        ...region.split("").map((c) => 0x1f1e6 - 65 + c.charCodeAt(0))
      );
      setFlag(flagEmoji);
    }
  }, [code]);
  return <span className={styles.flag} aria-hidden="true">{flag}</span>;
}

export default function Waitlist() {
  const { t } = useTranslation();
  const [prefix, setPrefix] = useState("+212");
  const [prefixOpen, setPrefixOpen] = useState(false);
  const prefixRef = useRef(null);
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    function handleClickOutside(e) {
      if (prefixRef.current && !prefixRef.current.contains(e.target)) {
        setPrefixOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function submit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Full phone: prefix + number (e.g. +212612345678)
    const fullPhone = `${prefix}${phone.replace(/\s/g, "")}`;

    const API_BASE =
      import.meta.env.VITE_API_URL || "https://sahbi-backend.onrender.com/api";

    try {
      const res = await fetch(`${API_BASE}/waiting-list`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: fullPhone,
          source: "landing",
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          data?.message || t("waitlist.errorGeneric", "Something went wrong.")
        );
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message || t("waitlist.errorGeneric", "Something went wrong."));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waitlist" className={styles.waitlist}>
      <div className={styles.bgAccent} aria-hidden="true" />
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            <Gift size={18} />
            {t("waitlist.badge")}
          </span>

          <h2>{t("waitlist.title")}</h2>

          {success ? (
            <motion.p
              className={styles.success}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {t("waitlist.success")}
            </motion.p>
          ) : (
            <>
              <ProseContent
                text={t("waitlist.intro")}
                variant="center"
                className={styles.introProse}
              />
              <form onSubmit={submit} className={styles.form}>
              <div className={styles.phoneRow}>
                <div className={styles.prefixWrap} ref={prefixRef}>
                  <button
                    type="button"
                    className={styles.prefixSelect}
                    onClick={() => setPrefixOpen(!prefixOpen)}
                    aria-expanded={prefixOpen}
                    aria-haspopup="listbox"
                    aria-label="Phone prefix"
                  >
                    <Flag code={PHONE_PREFIXES.find((p) => p.value === prefix)?.flag} />
                    <span>{prefix}</span>
                    <ChevronDown size={16} className={prefixOpen ? styles.chevronOpen : ""} />
                  </button>
                  {prefixOpen && (
                    <ul
                      className={styles.prefixDropdown}
                      role="listbox"
                    >
                      {PHONE_PREFIXES.map(({ value, flag, label }) => (
                        <li
                          key={value}
                          role="option"
                          aria-selected={prefix === value}
                          className={prefix === value ? styles.selected : ""}
                          onClick={() => {
                            setPrefix(value);
                            setPrefixOpen(false);
                          }}
                        >
                          <Flag code={flag} />
                          <span>{value}</span>
                          <span className={styles.countryName}>{label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={styles.inputWrap}>
                  <span className={styles.inputIcon} aria-hidden="true">
                    <Phone size={20} />
                  </span>
                  <input
                    type="tel"
                    placeholder={t("waitlist.placeholder")}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    dir="ltr"
                  />
                </div>
              </div>
              <button type="submit" disabled={loading}>
                {loading ? "..." : t("waitlist.submit")}
              </button>
              {error && <p className={styles.error}>{error}</p>}
              <p className={styles.micro}>{t("waitlist.micro")}</p>
              <p className={styles.formNote}>{t("waitlist.formNote")}</p>
            </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
