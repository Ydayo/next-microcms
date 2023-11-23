"use client";
import React from "react";
import Header from "../../ui/Header/Header";
import Skill from "../../ui/Skill/Skill";
import { Portfolio } from "../../ui/Portfolio/Portfolio";
import SeeMore from "../../ui/SeeMore/SeeMore";
import Footer from "../../ui/Footer/Footer";
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
