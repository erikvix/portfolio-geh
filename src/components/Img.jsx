import React from "react";
import photo from "../assets/geovana-photo.png";
import "./Img.css";
const Img = ({ className }) => {
  return <img className={className} src={photo} />;
};

export default Img;
