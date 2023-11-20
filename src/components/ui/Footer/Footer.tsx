import React, { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-title"]}>FooterTitle</div>
    </footer>
  );
};

export default Footer;
