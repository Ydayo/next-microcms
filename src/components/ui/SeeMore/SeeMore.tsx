import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./SeeMore.module.css";

const SeeMore: NextPage = () => {
  return (
    <ul className={styles["see-more"]}>
      <li className={styles.github}>
        <Image src={"/github.png"} width={100} height={100} alt="github" />
      </li>
      <li>
        <a href="https://github.com/Ydayo">My Github</a>
      </li>
      <li>or</li>
      <li>
        <Link href={"/blog"}>My Blog</Link>
      </li>
    </ul>
  );
};

export default SeeMore;
