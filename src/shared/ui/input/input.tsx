import React, { forwardRef, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export const Input = forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
    <input ref={ref} type="text" id="" className={styles.input} {...props} />
));
