"use client";
import styles from "@/components/summary.module.css";
import { useInView, motion, stagger } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const one = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
export default function Summary() {
  const div = useRef(null);
  const isDivInView = useInView(div, { once: true, amount: 0.8 });

  return (
    <motion.div
      ref={div}
      variants={container}
      initial="hidden"
      animate={isDivInView ? "show" : "hidden"}
      className={styles.summary}
      name="contact"
    >
      <motion.h2 variants={one}>
        Let&apos;s create something impactful together.
      </motion.h2>
      <motion.p variants={one}>
        I love turning ideas into scalable digital products that actually make a
        difference and are built to deliver real results for users and
        businesses alike.
      </motion.p>
      <div>
        <motion.ul variants={one}>
          <li>X(Twitter)</li>
          <li>LinkedIn</li>
        </motion.ul>
      </div>
      <a href={`mailto:elijahhyson1@gmail.com`}>
        <motion.button variants={one} className={styles.button}>
          Let&apos;s Connect!
        </motion.button>
      </a>
    </motion.div>
  );
}
