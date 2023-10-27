import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "primary" | "secondary" | "danger" | "alert";
  onClick: () => void;
}

export const Button = ({ children, type = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + type} onClick={onClick}>
      {children}
    </button>
  );
};
