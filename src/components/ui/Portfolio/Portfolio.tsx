import { portfolioItem } from "@/store";
import Image from "next/image";
import styles from "./Portfolio.module.css";
import { NextPage } from "next";
import { PortfolioImageProps } from "@/types/ImageTypes";

export const Portfolio: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>Portfolio</h1>
      <div className={styles["portfolio-items"]}>
        {portfolioItem.map(
          ({ id, src, title, description, link }: PortfolioImageProps) => (
            <a
              href={link}
              target="_blank"
              key={id}
              className={styles["portfolio-link"]}
            >
              <Image
                src={src}
                width={400}
                height={200}
                alt="PortfolioImage"
                className={styles["portfolio-img"]}
              />
              <p className={styles["portfolio-title"]}>{title}</p>
              <p className={styles["portfolio-desc"]}>{description}</p>
            </a>
          )
        )}
      </div>
    </>
  );
};
