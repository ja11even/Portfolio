"use client";
import styles from "@/components/tools.module.css";
import Image from "next/image";
import javascript from "@/public/JavaScript.png";
import nodejs from "@/public/Node.js.png";
import sqlite from "@/public/SQLite.png";
import supabase from "@/public/supabase.png";
import react from "@/public/React.png";
import nextjs from "@/public/Next.js.png";
import tailwind from "@/public/TailwindCSS.png";
import framermotion from "@/public/framer-motion.png";
import tanstackquery from "@/public/tanstack.png";
import aws from "@/public/AWS.png";
import git from "@/public/git.png";
import github from "@/public/github.png";
import figma from "@/public/figma1.png";
import vercel from "@/public/vercel.png";
import resend from "@/public/resend.png";
import postman from "@/public/postman.png";
import styled from "@/public/styled.jpg";
import { useRef } from "react";
import { useInView, motion, delay, scale } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const tools = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.8,
      ease: "easeInOut",
    },
  },
};

const frontend = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      delay: 1.2,
      ease: "easeInOut",
    },
  },
};

const frontendTools = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.4,
    },
  },
};

const ftool = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 8,
      mass: 0.5,
    },
  },
};

const backend = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      delay: 4.5,
      ease: "easeInOut",
    },
  },
};

const backendTools = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 5.0,
      staggerChildren: 0.4,
    },
  },
};

const btool = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 8,
      mass: 0.5,
    },
  },
};

const extras = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      delay: 6.5,
      ease: "easeInOut",
    },
  },
};

const extraTools = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 7.0,
      staggerChildren: 0.4,
    },
  },
};

const etool = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 1,
    },
  },
};
export default function Tools() {
  const div = useRef(null);
  const isDivInView = useInView(div, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={div}
      variants={container}
      initial="hidden"
      animate={isDivInView ? "show" : "hidden"}
      className={styles.tools}
    >
      <motion.h2 variants={tools}>Tools</motion.h2>
      <div className={styles.frontend}>
        <motion.h3 variants={frontend}>Frontend</motion.h3>
        <motion.div
          variants={frontendTools}
          ref={div}
          initial="hidden"
          animate={isDivInView ? "show" : "hidden"}
          className={styles.frontendTools}
        >
          <motion.div variants={ftool} className={styles.javascript}>
            <Image
              src={javascript}
              alt="javascript"
              priority
              className={styles.images}
            />
            <p>Javascript</p>
          </motion.div>
          <motion.div variants={ftool} className={styles.react}>
            <Image src={react} alt="react" priority className={styles.images} />
            <p>React</p>
          </motion.div>
          <motion.div variants={ftool} className={styles.nextjs}>
            <Image
              src={nextjs}
              alt="Nextjs"
              priority
              className={styles.images}
            />
            <p>Next.js</p>
          </motion.div>
          <motion.div variants={ftool} className={styles.tailwind}>
            <Image
              src={tailwind}
              alt="tailwind"
              priority
              className={styles.images}
            />
            <p>Tailwindcss</p>
          </motion.div>
          <motion.div variants={ftool} className={styles.styledcomponents}>
            <Image
              src={styled}
              alt="styledcomponents"
              priority
              className={styles.images}
            />
            <p>Styled components</p>
          </motion.div>
          <motion.div variants={ftool} className={styles.framermotion}>
            <Image
              src={framermotion}
              alt="framermotion"
              priority
              className={styles.images}
            />
            <p>Framer Motion</p>
          </motion.div>
          <motion.div variants={ftool} className={styles.tanstackquery}>
            <Image
              src={tanstackquery}
              alt="tanstack"
              priority
              className={styles.images}
            />
            <p>Tanstack</p>
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.backend}>
        <motion.h3 variants={backend}>Backend</motion.h3>
        <motion.div
          variants={backendTools}
          ref={div}
          initial="hidden"
          animate={isDivInView ? "show" : "hidden"}
          className={styles.backendTools}
        >
          <motion.div variants={btool} className={styles.nodejs}>
            <Image
              src={nodejs}
              alt="nodejs"
              priority
              className={styles.images}
            />
            <p>NodeJs</p>
          </motion.div>
          <motion.div variants={btool} className={styles.sqlite}>
            <Image
              src={sqlite}
              alt="sqlite"
              priority
              className={styles.images}
            />
            <p>SQLite</p>
          </motion.div>
          <motion.div variants={btool} className={styles.supabase}>
            <Image
              src={supabase}
              alt="supabase"
              priority
              className={styles.images}
            />
            <p>Supabase</p>
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.extras}>
        <motion.h3 variants={extras}>Extras</motion.h3>
        <motion.div
          ref={div}
          variants={extraTools}
          initial="hidden"
          animate={isDivInView ? "show" : "hidden"}
          className={styles.extraTools}
        >
          <motion.div variants={etool} className={styles.aws}>
            <Image src={aws} alt="aws" priority className={styles.images} />
            <p>AWS</p>
          </motion.div>
          <motion.div variants={etool} className={styles.git}>
            <Image src={git} alt="git" priority className={styles.images} />
            <p>Git</p>
          </motion.div>
          <motion.div variants={etool} className={styles.github}>
            <Image
              src={github}
              alt="github"
              priority
              className={styles.images}
            />
            <p>Github</p>
          </motion.div>
          <motion.div variants={etool} className={styles.figma}>
            <Image src={figma} alt="figma" priority className={styles.images} />
            <p>Figma</p>
          </motion.div>
          <motion.div variants={etool} className={styles.vercel}>
            <Image
              src={vercel}
              alt="vercel"
              priority
              className={styles.images}
            />
            <p>Vercel</p>
          </motion.div>
          <motion.div variants={etool} className={styles.resend}>
            <Image
              src={resend}
              alt="resend"
              priority
              className={styles.images}
            />
            <p>Resend</p>
          </motion.div>
          <motion.div variants={etool} className={styles.postman}>
            <Image
              src={postman}
              alt="postman"
              priority
              className={styles.images}
            />
            <p>Postman</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
