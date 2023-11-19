import React, { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-title"]}>BlogTitle</div>
    </header>
  );
};

export default Header;
