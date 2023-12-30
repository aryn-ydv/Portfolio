import React from "react";
import "./Button.css";

const Button = (props) => {
  return <div className="buttonContainer">{props.title}</div>;
};

export default Button;
