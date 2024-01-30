import React from "react";
import "./Button.css";

const Button = ({ children = "Entrar em contato", className = "btn" }) => {
  return <button className={className}>{children}</button>;
};

export default Button;
