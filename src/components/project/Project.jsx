import React from "react";
import "./Project.css";

const Project = (props) => {
  return (
    <a
      href={props.link}
      className="projectContainer flex"
      target="_blank"
      rel="noreferrer"
    >
      <div className="projectImage">
        <img src={props.image} alt="project" />
      </div>
      <div className="projectName">{props.name}</div>
    </a>
  );
};

export default Project;
