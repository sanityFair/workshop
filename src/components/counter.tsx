import React, { useState } from "react";
import styles from "../index.module.scss";

export const Counter = () => {
  const [count, setCounter] = useState(0);

  return (
    <button
      className={styles.btn}
      onClick={() => setCounter((prev) => prev + 1)}
    >
      {count}
    </button>
  );
};
