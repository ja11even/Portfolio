import styles from "@/app/page.module.css";
import HeroLeft from "@/components/hero-left";
import HeroRight from "@/components/hero-right";
import Button from "@/components/button";
import Featured from "@/components/featured";
import Project from "@/components/projects";
import About from "@/components/about";
import Tools from "@/components/tools";
import Summary from "@/components/summary";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.hero}>
          <HeroLeft />
          <HeroRight />
        </div>
        <Button />
        <Featured />
        <Project />
        <About />
        <Tools />
        <Summary />
        <div className={styles.cwm}>
          <h1>Connect with me</h1>
        </div>
        <div className={styles.footer}>
          <p>Built by Elijah</p>
        </div>
      </main>
    </div>
  );
}
