import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Mask.module.css";

const Mask = () => {
  return (
    <div className={styles.mask}>
      <ul className={styles["mask-list"]}>
        <li className={styles["ishikawa-img"]}>
          {/* <Image
            src={"/ishikawa-tokyo-logo-white-transparent.png"}
            alt="Ishikawa Tokyo"
            width={500}
            height={100}
            className={styles["ishikawa-tokyo"]}
            priority
          /> */}
          <h1
            className={styles["ishikawa-tokyo"]}
            style={{ color: "white", fontSize: "100px" }}
          >
            Tokyo
          </h1>
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
