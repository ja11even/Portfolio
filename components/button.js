"use client";
import styles from "@/components/button.module.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function Button() {
  const button = useRef(null);
  const isbuttonInView = useInView(button, { once: true, margin: "-100px" });

  return (
    <div className={styles.buttonDiv}>
      <a href={`mailto:elijahhyson1@gmail.com`}>
        <motion.button
          ref={button}
          initial={{ scale: 1, opacity: 0 }}
          animate={
            isbuttonInView ? { scale: [1, 1.4, 1], opacity: 1 } : { scale: 1 }
          }
          transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
          className={styles.button}
        >
          Connect With Me!
        </motion.button>
      </a>
    </div>
  );
}
