import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Portfolio } from "@/components/ui/Portfolio/Portfolio";
import Skill from "@/components/ui/Skill/Skill";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Skill />
        <Portfolio />
      </div>
      <Footer />
    </>
  );
}
