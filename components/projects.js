"use client";
import styles from "@/components/projects.module.css";
import { motion, scale, useInView } from "framer-motion";
import {
  ArrowRight,
  Dot,
  ExternalLink,
  Flame,
  Palette,
  Star,
} from "lucide-react";
import { useRef } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

const project = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Project() {
  const box = useRef(null);
  const isboxInView = useInView(box, { once: true, amount: 0.6 });
  return (
    <motion.div
      ref={box}
      className={styles.projects}
      variants={container}
      initial="hidden"
      animate={isboxInView ? "show" : "hidden"}
    >
      <motion.div variants={project} className={styles.projectCard}>
        <div className={styles.cardEmoji}>
          <div className={styles.petmuseemojiDiv}>
            <Palette size={25} />
          </div>
          <div className={styles.stackDiv}>
            <p>Full stack</p>
            <a
              href="https://petmuse.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink
                size={21}
                color="#8e51ff"
                className={styles.externallink}
              />
            </a>
          </div>
        </div>
        <div className={styles.cardTitle}>
          <p>{`<PetMuse />`}</p>
        </div>
        <div className={styles.cardInfo}>
          <p>
            A pet care planner that helps users manage their pets health,
            appointments, and reminders in one organized place.
            <br /> It&apos;s built to make caring for pets simple, structured,
            and stress free.
          </p>
        </div>
        <div className={styles.cardStack}>
          <ul>
            <li>React.js</li>
            <li>Styled Components</li>
            <li>Framer Motion</li>
            <li>Resend</li>
            <li>Supabase</li>
          </ul>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.cardFooter1}>
            <div className={styles.liveDot}>
              <Dot size={35} color="#6BE174" className={styles.dot} />
              <p>Live</p>
            </div>
            <p>
              <Star size={15} color="#FAC833" fill="#FAC833" />
              Featured
            </p>
          </div>
          <div className={styles.cardFooter2}>
            <a
              href="https://petmuse.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.petmuseCardButton}>
                View <ArrowRight size={15} />
              </button>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div variants={project} className={styles.projectCard}>
        <div className={styles.cardEmoji}>
          <div className={styles.whisperemojiDiv}>
            <Flame size={25} />
          </div>
          <div className={styles.stackDiv}>
            <p>Full stack</p>
            <a
              href="https://whisper-11.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink
                size={21}
                color="#fb2c36"
                className={styles.externallink}
              />
            </a>
          </div>
        </div>
        <div className={styles.cardTitle}>
          <p>{`<Whisper />`}</p>
        </div>
        <div className={styles.cardInfo}>
          <p>
            A space where friends can share their thoughts and secrets
            anonymously.
            <br /> It&apos;s all about open expression without judgment, real
            talk, no names attached.
          </p>
        </div>
        <div className={styles.cardStack}>
          <ul>
            <li>React.js</li>
            <li>Styled Components</li>
            <li>Framer Motion</li>
            <li>Supabase</li>
          </ul>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.cardFooter1}>
            <div className={styles.liveDot}>
              <Dot size={35} color="#6BE174" className={styles.dot} />
              <p>Live</p>
            </div>
            <p>
              <Star size={15} color="#FAC833" fill="#FAC833" />
              Featured
            </p>
          </div>
          <div className={styles.cardFooter2}>
            <a
              href="https://whisper-11.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.whispercardButton}>
                View <ArrowRight size={15} />
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
