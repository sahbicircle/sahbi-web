import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";
import styles from "./EventCard.module.scss";

const AVATARS = [
  "https://i.pravatar.cc/80?img=1",
  "https://i.pravatar.cc/80?img=2",
  "https://i.pravatar.cc/80?img=3",
  "https://i.pravatar.cc/80?img=4",
  "https://i.pravatar.cc/80?img=5",
];

export default function EventCard({ venue, time, participants = 5, type = "brunch", index = 0 }) {
  const { t } = useTranslation();

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.typeBadge}>
        {type === "brunch" ? t("events.brunch") : t("events.dinner")}
      </div>
      <h3>{venue}</h3>
      <div className={styles.meta}>
        <span><Clock size={16} />{time}</span>
        <span><Users size={16} />{participants} {t("events.participants")}</span>
      </div>
      <div className={styles.avatars}>
        {AVATARS.slice(0, participants).map((src, i) => (
          <div key={i} className={styles.avatar} style={{ backgroundImage: `url(${src})` }} />
        ))}
      </div>
      <a href="#waitlist" className={styles.cta}>{t("events.join")}</a>
    </motion.article>
  );
}
