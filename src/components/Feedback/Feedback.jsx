import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MessageSquare, Send } from "lucide-react";
import styles from "./Feedback.module.scss";

export default function Feedback() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="feedback" className={styles.feedback}>
      <div className={styles.bgGradient} aria-hidden="true" />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MessageSquare size={36} className={styles.icon} />
          <h2>{t("feedback.title")}</h2>
          <p>{t("feedback.subtitle")}</p>
        </motion.div>

        <motion.div
          className={styles.formWrap}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {success ? (
            <motion.p
              className={styles.success}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {t("feedback.success")}
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                placeholder={t("feedback.name")}
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
              <input
                type="email"
                placeholder={t("feedback.email")}
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
              />
              <textarea
                placeholder={t("feedback.message")}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                rows={4}
                required
              />
              <button type="submit">
                <Send size={18} />
                {t("feedback.submit")}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
