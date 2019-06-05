import React from "react";
import Avatar from "../assets/images/avatar.png";

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="avatar-wrapper">
        <img alt="Justin's avatar" className="avatar" src={Avatar} />
      </div>
    </div>
  );
};

export default Intro;
