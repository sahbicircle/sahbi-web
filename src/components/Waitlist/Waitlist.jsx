import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Phone, Gift } from "lucide-react";
import styles from "./Waitlist.module.scss";

export default function Waitlist() {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function submit(e) {
    e.preventDefault();
    setLoading(true);

    // Simulate API call - replace with actual backend
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 800);
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
            {t("waitlist.subtitle")}
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
            <form onSubmit={submit} className={styles.form}>
              <div className={styles.inputWrap}>
                <Phone size={20} className={styles.inputIcon} />
                <input
                  type="tel"
                  placeholder={t("waitlist.placeholder")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  dir="ltr"
                />
              </div>
              <button type="submit" disabled={loading}>
                {loading ? "..." : t("waitlist.submit")}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
