"use client";
import { color, motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "@/components/hero-right.module.css";

export default function HeroRight() {
  const text = useRef(null);
  const istextInView = useInView(text, { once: true });
  const text1 = "I Bring Ideas To Life With";
  const text2 = "Clean Code And Smart";
  const text3 = "Architecture Across Industries";
  const text1SpanStart = text1.indexOf("Life");
  const text2SpanStart = text2.indexOf("Code");
  const text3SpanStart1 = text3.indexOf("Architecture");
  const text3SpanStart2 = text3.indexOf("Industries");
  const text1SpanEnd = text1SpanStart + "Life".length;
  const text2SpanEnd = text2SpanStart + "Code".length;
  const text3SpanEnd1 = text3SpanStart1 + "Architecture".length;
  const text3SpanEnd2 = text3SpanStart2 + "Industries".length;
  const charDuration = 0.05;
  const delay = 0.05;
  const text1Duration = text1.length * charDuration + delay;
  const text2Duration = text2.length * charDuration + delay;
  return (
    <div className={styles.right}>
      <p>
        {text1.split("").map((char, i) => (
          <motion.span
            ref={text}
            key={i}
            initial={{ opacity: 0 }}
            animate={istextInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: charDuration, delay: 0.9 + i * delay }}
            style={{
              display: "inline",
              color:
                i >= text1SpanStart && i < text1SpanEnd ? "#9F9C9C" : undefined,
            }}
          >
            {char}
          </motion.span>
        ))}
      </p>
      <p>
        {text2.split("").map((char, i) => (
          <motion.span
            ref={text}
            key={i}
            initial={{ opacity: 0 }}
            animate={istextInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: charDuration,
              delay: text1Duration + 0.9 + i * delay,
            }}
            style={{
              display: "inline",
              color:
                i >= text2SpanStart && i < text2SpanEnd ? "#9F9C9C" : undefined,
            }}
          >
            {char}
          </motion.span>
        ))}
      </p>
      <p>
        {text3.split("").map((char, i) => (
          <motion.span
            ref={text}
            key={i}
            initial={{ opacity: 0 }}
            animate={istextInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: charDuration,
              delay: text1Duration + text2Duration + 0.9 + i * delay,
            }}
            style={{
              display: "inline",
              color:
                (i >= text3SpanStart1 && i < text3SpanEnd1) ||
                (i >= text3SpanStart2 && i < text3SpanEnd2)
                  ? "#9F9C9C"
                  : undefined,
            }}
          >
            {char}
          </motion.span>
        ))}
      </p>
    </div>
  );
}
