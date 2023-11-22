import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Mask.module.css";

const Mask = () => {
  return (
    <div className={styles.mask}>
      <ul className={styles["mask-list"]}>
        <li>
          <Image
            src={"/ishikawa-tokyo-logo-white-transparent.png"}
            alt="Ishikawa Tokyo"
            width={1000}
            height={189}
            className={styles["ishikawa-tokyo"]}
          />
        </li>
        <li>
          <Link href={"/about"} className={styles.link}>
            about
          </Link>
        </li>
        <li>
          <Link href={"/blog"} className={styles.link}>
            blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Mask;
