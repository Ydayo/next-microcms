"use client";
import React, { FC, RefObject, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { Menu } from "../../icons/Menu";
import clsx from "clsx";
import { Close } from "@/components/icons/Close";

type Props = {
  scrollRef?: RefObject<HTMLElement> | null;
};

const Header: FC<Props> = ({ scrollRef }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
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
      <button className={clsx(styles["menu-btn"])} onClick={handleToggle}>
        <Menu color="white" />
      </button>
      <aside className={clsx(styles["menu-bar"], toggle && styles.toggle)}>
        <button className={styles["close-btn"]} onClick={handleToggle}>
          <Close />
        </button>
        <div className={styles.links}>
          <Link href={"/"}>Home</Link>
          <Link href={"/blog"}>Blog</Link>
        </div>
      </aside>
    </header>
  );
};

export default Header;
