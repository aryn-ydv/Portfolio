import React from "react";

const Project = (props) => {
  return (
    <div className="projectContainer">
      <div className="projectImage">{props.image}</div>
      <div className="projectName">{props.name}</div>
    </div>
  );
};

export default Project;
