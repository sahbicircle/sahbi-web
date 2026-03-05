import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import styles from "./Countdown.module.scss";

const LAUNCH_DATE = new Date("2026-04-01T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = LAUNCH_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLaunch: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    isLaunch: false,
  };
}

function CountdownUnit({ value, label }) {
  return (
    <motion.div
      className={styles.unit}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <span className={styles.value}>{String(value).padStart(2, "0")}</span>
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
}

export default function Countdown() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className={styles.countdown}>
      <div className={styles.bgOrbs} aria-hidden="true">
        <span className={styles.orb1} />
        <span className={styles.orb2} />
        <span className={styles.orb3} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Rocket size={32} className={styles.icon} />
          <h2>{t("countdown.title")}</h2>
          <p>{t("countdown.subtitle")}</p>
        </motion.div>

        {timeLeft.isLaunch ? (
          <motion.div
            className={styles.launchMsg}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            {t("countdown.launched")}
          </motion.div>
        ) : (
          <motion.div
            className={styles.units}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CountdownUnit value={timeLeft.days} label={t("countdown.days")} />
            <span className={styles.separator}>:</span>
            <CountdownUnit
              value={timeLeft.hours}
              label={t("countdown.hours")}
            />
            <span className={styles.separator}>:</span>
            <CountdownUnit
              value={timeLeft.minutes}
              label={t("countdown.minutes")}
            />
            <span className={styles.separator}>:</span>
            <CountdownUnit
              value={timeLeft.seconds}
              label={t("countdown.seconds")}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
