import React, { FC } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header: FC<{ scrollRef: any }> = ({ scrollRef }) => {
  return (
    <header className={styles.header} ref={scrollRef}>
      <Link href={"/"} className={styles.link}>
        {/* <Image
          src={"/ishikawa-tokyo-logo-white-transparent.png"}
          alt="logo"
          width={500}
          height={500}
          className={styles["header-logo"]}
          priority
        /> */}
        <h1 className={styles["header-title"]}>Tokyo</h1>
      </Link>
    </header>
  );
};

export default Header;
