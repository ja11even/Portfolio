"use client";
import styles from "@/components/about.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const aboutLeft = {
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
const aboutRight = {
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
const aboutMe = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.6,
      ease: "easeInOut",
    },
  },
};
export default function About() {
  const div = useRef(null);
  const isDivInView = useInView(div, { once: true, amount: 0.5 });
  return (
    <>
      <motion.div
        className={styles.about}
        ref={div}
        variants={container}
        initial="hidden"
        animate={isDivInView ? "show" : "hidden"}
        name="about"
      >
        <div className={styles.aboutLeft}>
          <motion.h2 variants={aboutLeft}>About Me</motion.h2>
        </div>
        <div className={styles.aboutRight}>
          <motion.p variants={aboutRight}>
            For me, building is curiosity, creativity, and care. <br />
            Here is the essential toolkit I use to deliver scalable, results
            driven products
          </motion.p>
        </div>
      </motion.div>
      <div className={styles.aboutMe}>
        <motion.p
          variants={aboutMe}
          initial="hidden"
          animate={isDivInView ? "show" : "hidden"}
        >
          I am a <span style={{ color: "#717070" }}>React</span> and{" "}
          <span style={{ color: "#717070" }}>Next.js </span>
          developer with an intense focus on the craft of web application
          development. I specialize in turning keen attention to detail and
          creative vision into smooth, scalable digital products.
          <div className={styles.filler} />
          On the frontend, I leverage{" "}
          <span style={{ color: "#717070" }}>React</span>,{" "}
          <span style={{ color: "#717070" }}>Next.js</span>,{" "}
          <span style={{ color: "#717070" }}>Framer Motion</span>, and the
          versatility of{" "}
          <span style={{ color: "#717070" }}>
            Tailwind CSS/styled components
          </span>{" "}
          to build dynamic, responsive interfaces that feel effortless to use. I
          manage the data, authentication, and API logic required on the backend
          to deliver a complete, high-performance product.
        </motion.p>
      </div>
    </>
  );
}
