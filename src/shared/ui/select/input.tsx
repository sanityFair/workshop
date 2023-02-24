import React, { forwardRef, InputHTMLAttributes } from "react";
import { Arrow } from "../icons";
import styles from "./styles.module.scss";

export const Select = forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
    <div className={styles.container}>
        <input
            ref={ref}
            type="text"
            id=""
            {...props}
            className={styles.input}
        />
        <div className={styles.arrow}>
            <Arrow />
        </div>
    </div>
));
