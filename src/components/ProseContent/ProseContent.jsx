import { motion } from "framer-motion";
import styles from "./ProseContent.module.scss";

/** Split i18n body on blank lines and line breaks into discrete <p> blocks. */
export function splitProseBody(text) {
  if (!text || typeof text !== "string") return [];
  const chunks = text.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
  const out = [];
  for (const chunk of chunks) {
    chunk
      .split(/\n/)
      .map((s) => s.trim())
      .filter(Boolean)
      .forEach((line) => out.push(line));
  }
  return out;
}

/**
 * @param {"center" | "editorial"} variant
 */
export default function ProseContent({ text, variant = "editorial", className = "" }) {
  const paragraphs = splitProseBody(text);
  if (paragraphs.length === 0) return null;

  return (
    <motion.div
      className={`${styles.root} ${styles[variant]} ${className}`.trim()}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.surface}>
        {paragraphs.map((block, i) => (
          <p key={i} className={styles.paragraph}>
            {block}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
