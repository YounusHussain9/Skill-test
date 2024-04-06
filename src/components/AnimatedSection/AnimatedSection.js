import React, { useState } from "react";
import "./AnimatedSection.css";

const ImageAnimation = () => {
  const [animate, setAnimate] = useState(true);

  return (
    <div>
      <div className={`image ${animate ? "animate" : ""}`} id="image1">
        {" "}
        <img src={"/images/page_1.png"} alt="page" className="img_1" />
      </div>
      <div className={`image ${animate ? "animate" : ""}`} id="image2">
        <img src={"/images/page_2.png"} alt="page" />{" "}
      </div>
      <div className={`image ${animate ? "animate" : ""}`} id="image3">
        <img src={"/images/page_3.png"} alt="page" />{" "}
      </div>
      <div className={`image ${animate ? "animate" : ""}`} id="image4">
        <img src={"/images/page_4.png"} alt="page" />{" "}
      </div>
      <div className={`image ${animate ? "animate" : ""}`} id="image4">
        <img src={"/images/page_4.png"} alt="page" />{" "}
      </div>
      <div className={`image ${animate ? "animate" : ""}`} id="image4">
        <img src={"/images/page_4.png"} alt="page" />{" "}
      </div>
      <div className={`image ${animate ? "animate" : ""}`} id="image4">
        <img src={"/images/page_4.png"} alt="page" />{" "}
      </div>
      <div className={`image ${animate ? "animate" : ""}`} id="image5">
        <img src={"/images/page_5.png"} alt="page" />{" "}
      </div>
      <div className={`image ${animate ? "animate" : ""}`} id="image6">
        <img src={"/images/page_6.png"} alt="page" />{" "}
      </div>
      <div className={`image ${animate ? "animate" : ""}`} id="image7">
        <img src={"/images/page_7.png"} alt="page" />{" "}
      </div>
      <div className="coverImage">
        {" "}
        <img
          src={"/images/Cover.png"}
          alt="page"
          style={{ height: "330px", zIndex: "3px" }}
        />
      </div>
    </div>
  );
};

export default ImageAnimation;
