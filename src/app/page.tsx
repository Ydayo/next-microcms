import Header from "@/components/header/Header";
import { Portfolio } from "@/components/ui/portfolio/Portfolio";
import Skill from "@/components/ui/skill/Skill";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <Skill />
          <Portfolio />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
