import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import React from "react";
import styles from "../../styles/page.module.css";

const Layout = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Link href="/">go back</Link>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
