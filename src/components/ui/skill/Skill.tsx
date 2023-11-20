import { skillIcons } from "@/store";
import Image from "next/image";
import React from "react";
import styles from "./Skill.module.css";

interface ImageProps {
  id: number;
  icon: string;
  width?: number;
  height?: number;
}

const Skill = () => {
  return (
    <div>
      <h1 className={styles["skill-title"]}>Skill</h1>
      <ul className={styles.icons}>
        {skillIcons.map(
          ({ id, icon, width = 100, height = 100 }: ImageProps) => (
            <li key={id} className={styles.icon}>
              <Image
                src={icon}
                width={width}
                height={height}
                alt="Skill Icon"
                className={styles["icon-img"]}
                priority
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Skill;
