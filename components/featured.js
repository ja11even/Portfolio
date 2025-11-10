"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "@/components/featured.module.css";

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const featuredLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const featuredRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
export default function Featured() {
  const div = useRef(null);
  const isDivInView = useInView(div, { once: true, amount: 0.5 });
  return (
    <motion.div
      className={styles.featured}
      ref={div}
      variants={container}
      initial="hidden"
      animate={isDivInView ? "show" : "hidden"}
      name="projects"
    >
      <div className={styles.featuredLeft}>
        <motion.h2 variants={featuredLeft}>Featured Projects</motion.h2>
      </div>
      <div className={styles.featuredRight}>
        <motion.p variants={featuredRight}>
          I build projects that balance creativity with structure to drive
          performance and growth.
          <br />
          Here are a few that reflect my approach.
        </motion.p>
      </div>
    </motion.div>
  );
}
