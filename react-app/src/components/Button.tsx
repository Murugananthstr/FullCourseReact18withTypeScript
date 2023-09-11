import React from "react";

interface Props {
  children: string;
  color?: "primary" | "success" | "info" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "info", onClick }: Props) => {
  return (
    <button onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
