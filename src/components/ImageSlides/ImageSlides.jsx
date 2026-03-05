import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ImageSlides.module.scss";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Restaurant ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    alt: "Group dining",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Marrakech",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Brunch",
  },
];

export default function ImageSlides() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.slides}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("slides.title")}
        </motion.h2>

        <motion.div
          className={styles.carousel}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            className={styles.navBtn}
            onClick={() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          <div className={styles.slideWrap}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className={styles.slide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <img src={SLIDES[index].src} alt={SLIDES[index].alt} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className={styles.navBtn}
            onClick={() => setIndex((i) => (i + 1) % SLIDES.length)}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </motion.div>

        <div className={styles.dots}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.active : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
