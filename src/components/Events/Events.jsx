import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import EventCard from "../EventCard/EventCard";
import styles from "./Events.module.scss";

const SAMPLE_EVENTS = [
  { venue: "Le Comptoir Darna", time: "11h00", participants: 5, type: "brunch" },
  { venue: "La Mamounia", time: "19h30", participants: 6, type: "dinner" },
  { venue: "Café Arabe", time: "12h00", participants: 5, type: "brunch" },
];

export default function Events() {
  const { t } = useTranslation();

  return (
    <section id="events" className={styles.events}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>{t("events.title")}</h2>
          <p>{t("events.subtitle")}</p>
        </motion.div>
        <div className={styles.grid}>
          {SAMPLE_EVENTS.map((event, i) => (
            <EventCard key={i} {...event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
