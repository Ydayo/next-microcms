import React, { FC, RefObject } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

type Props = {
  scrollRef: RefObject<HTMLElement> | null;
};

const Header: FC<Props> = ({ scrollRef }) => {
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
