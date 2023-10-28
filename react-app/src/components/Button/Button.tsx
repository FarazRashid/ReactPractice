import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  type?: "primary" | "secondary" | "danger" | "alert";
  onClick: () => void;
}

export const Button = ({ children, type = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + type]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
