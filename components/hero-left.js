"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "@/components/hero-left.module.css";
export default function HeroLeft() {
  const text = useRef(null);
  const isleftInView = useInView(text, { once: true });

  return (
    <div className={styles.left}>
      <motion.p
        ref={text}
        initial={{ opacity: 0, y: 30 }}
        animate={isleftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        I Develop <span style={{ color: "#9F9C9C" }}>Digital</span> Solutions
      </motion.p>
      <motion.p
        ref={text}
        initial={{ opacity: 0, y: 30 }}
        animate={isleftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
      >
        That Run <span style={{ color: "#9F9C9C" }}>Smooth</span>,
      </motion.p>
      <motion.p
        ref={text}
        initial={{ opacity: 0, y: 30 }}
        animate={isleftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
      >
        Looks <span style={{ color: "#9F9C9C" }}>Good</span>,
      </motion.p>
      <motion.p
        ref={text}
        initial={{ opacity: 0, y: 30 }}
        animate={isleftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
      >
        And <span style={{ color: "#9F9C9C" }}>Drives</span> Results.
      </motion.p>
    </div>
  );
}
