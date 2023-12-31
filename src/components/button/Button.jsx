import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div
      className="buttonContainer"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      {props.title}
    </div>
  );
};

export default Button;
