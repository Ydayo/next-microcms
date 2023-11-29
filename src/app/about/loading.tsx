import Circle from "@/components/ui/Circle/Circle";
import React from "react";
import styles from "@/styles/page.module.css";

const loading = () => {
  return (
    <div className={styles.loading}>
      <Circle />
    </div>
  );
};

export default loading;
