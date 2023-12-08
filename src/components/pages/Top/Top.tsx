"use client";
import React from "react";
import Header from "@/components/ui/Header/Header";
import Skill from "@/components/ui/Skill/Skill";
import { Portfolio } from "@/components/ui/Portfolio/Portfolio";
import SeeMore from "@/components/ui/SeeMore/SeeMore";
import Footer from "@/components/ui/Footer/Footer";
import styles from "@/styles/page.module.css";
import { useScroll } from "@/hooks/Scroll";

const Top = () => {
  const { scrolled, handleScroll, scrollRef } = useScroll();
  return (
    <>
      <Header scrollRef={scrollRef} />
      <div className={styles.container}>
        <Skill />
        <Portfolio />
        <SeeMore />
        <button
          onClick={handleScroll}
          className={`${styles["scroll-top"]} ${scrolled && styles.visibility}`}
        >
          Top
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Top;
