import React from "react";
import {
  FaReact,
  FaDocker,
  FaJava,
  FaGithub,
  FaPhoneAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiSpring, SiMysql, SiFigma } from "react-icons/si";
import { MdEmail, MdLocationOn } from "react-icons/md";
import "./Hero.css";
import DisplayPhoto from "../../res/display-photo.png";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="heroContainer flex">
      <div className="detailsContainer flex">
        <div className="nameContainer flex">
          <div className="name">Aryan Yadav</div>
          <div className="role">Java Developer</div>
          <div className="mainSkills flex">
            <FaJava />
            <SiSpring />
            <FaReact />
            <SiMysql />
            <FaDocker />
            <SiFigma />
          </div>
        </div>
        <div className="imageContainer">
          <img src={DisplayPhoto} alt="developer-display" />
        </div>
      </div>
      <div className="aboutContainer">
        Highly Motivated Junior Java Developer | Eager to Learn & Contribute |
        Fast Learner I started web development as my passion, as I go ahead with
        learning I found new exciting things which increases my interest and
        bind me with them.
      </div>
      <div className="linksContainer flex">
        <div className="linkContainer">
          <MdEmail /> one.aryan7@gmail.com
        </div>
        <div className="linkContainer">
          <MdLocationOn /> Narnaul, Haryana
        </div>
        <div className="linkContainer">
          <FaGithub /> https://github.com/aryn-ydv
        </div>
        <div className="linkContainer">
          <FaPhoneAlt /> +91 9466175388
        </div>
        <div className="linkContainer">
          <FaLinkedinIn /> https://www.linkedin.com/in/aryan-yadav-29644b2a7/
        </div>
      </div>
      <Button title="Download Resume" />
    </div>
  );
};

export default Hero;
