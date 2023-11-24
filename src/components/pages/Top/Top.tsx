"use client";
import React from "react";
import Header from "@/components/ui/Header/Header";
import Skill from "@/components/ui/Skill/Skill";
import { Portfolio } from "@/components/ui/Portfolio/Portfolio";
import SeeMore from "@/components/ui/SeeMore/SeeMore";
import Footer from "@/components/ui/Footer/Footer";
import styles from "@/styles/page.module.css";

const Top = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Skill />
        <Portfolio />
        <SeeMore />
      </div>
      <Footer />
    </>
  );
};

export default Top;
