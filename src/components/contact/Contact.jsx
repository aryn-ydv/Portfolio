import React from "react";
import "./Contact.css";
import Button from "../button/Button";

const Contact = () => {
  return (
    <div className="contactContainer">
      <textarea placeholder="Write a message..." />
      <div className="contactButtonContainer flex">
        <Button className="contactButton" bgColor="#1a1a1a" title="submit" />
        <div className="socialButtonContainer flex">
          <a href="." target="_blank" rel="noreferrer">
            <Button
              className="contactButton"
              bgColor="#ffb30f"
              color="#121212"
              title="Gmail"
            />
          </a>
          <a
            href="https://github.com/aryn-ydv"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="contactButton"
              bgColor="#ffb30f"
              color="#121212"
              title="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-yadav-29644b2a7/"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="contactButton"
              bgColor="#ffb30f"
              color="#121212"
              title="LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
