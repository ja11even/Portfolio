"use client";
import styles from "@/components/header.module.css";
import avatar from "@/public/11.avatar.webp";
import { AnimatePresence, motion } from "framer-motion";
import { TextAlignEnd, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link, scroller } from "react-scroll";

export default function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-US", {
      year: "numeric",
      weekday: "long",
      month: "long",
      day: "numeric",
    })
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());

      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        weekday: "long",
        month: "long",
        day: "numeric",
      });
      setDate((prev) => (prev !== currentDate ? currentDate : prev));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollProjects = () => {
    setOpen(false);
    setTimeout(() => {
      scroller.scrollTo("projects", {
        smooth: true,
        duration: 500,
      });
    }, 300);
  };

  const scrollAbout = () => {
    setOpen(false);
    setTimeout(() => {
      scroller.scrollTo("about", {
        smooth: true,
        duration: 500,
      });
    }, 300);
  };
  const scrollContact = () => {
    setOpen(false);
    setTimeout(() => {
      scroller.scrollTo("contact", {
        smooth: true,
        duration: 500,
      });
    }, 300);
  };

  return (
    <div className={styles.header}>
      <div className={styles.profile}>
        <div>
          <Image src={avatar} alt="avatar" priority className={styles.avatar} />
        </div>
        <div className={styles.info}>
          <h2>Elijah Ogwo</h2>
          <p>Full stack developer</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.datetime}>
        <div className={styles.date}>
          <p>{date}</p>
        </div>
        <div className={styles.time}>
          <p>{time}</p>
        </div>
      </div>
      <div className={styles.menu}>
        <AnimatePresence mode="wait" initial={false}>
          <TextAlignEnd onClick={() => setOpen(true)} size={30} />
          {open && (
            <motion.div
              className={styles.overlay}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 8,
                mass: 1,
                duration: 0.1,
              }}
            >
              <div className={styles.mobileheader}>
                <div className={styles.profile}>
                  <div>
                    <Image
                      src={avatar}
                      alt="avatar"
                      priority
                      className={styles.avatar}
                    />
                  </div>
                  <div className={styles.info}>
                    <h2>Elijah Ogwo</h2>
                    <p>Full stack developer</p>
                  </div>
                </div>
                <div className={styles.mobileiconmenu}>
                  <X onClick={() => setOpen(false)} size={30} />
                </div>
              </div>
              <ul className={styles.mobilemenu}>
                <Link onClick={scrollProjects}>
                  <li className={styles.mobileitem}>Projects</li>
                </Link>
                <Link onClick={scrollAbout}>
                  <li className={styles.mobileitem}>About</li>
                </Link>
                <Link onClick={scrollContact}>
                  <li className={styles.mobileitem}>Contact</li>
                </Link>
              </ul>
              <div className={styles.mobiledatetime}>
                <div className={styles.mobiledate}>
                  <p>{date}</p>
                </div>
                <div className={styles.mobiletime}>
                  <p>{time}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
