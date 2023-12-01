import React, { FC } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Link href={"/"} style={{ textDecoration: "none" }}>
        {/* <Image
          src={"/ishikawa-tokyo-logo-white-transparent.png"}
          alt="logo"
          width={500}
          height={500}
          className={styles["header-logo"]}
        /> */}
        <h1 className={styles["footer-title"]}>Tokyo</h1>
      </Link>
    </footer>
  );
};

export default Footer;
