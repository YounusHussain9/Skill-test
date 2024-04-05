import React from "react";
import "./ScrollContent.css";

const ScrollContent = () => {
  const pageImages = [
    "/images/page_1.png",
    "/images/page_2.png",
    "/images/page_3.png",
    "/images/page_4.png",
    "/images/page_5.png",
    "/images/page_6.png",
    "/images/page_7.png",
    "/images/page_8.png",
  ];
  
  
  return (
    <section>
      <div className="smTextContainer">
        <h1 style={{ textAlign: "center" }}>
          The most <br /> comprehensive <br />{" "}
          <span style={{ fontStyle: "italic" }}>analysis of your face</span>
        </h1>
      </div>
      <div className="contentContainer">
        <div className="textContainer">
          <h1 style={{ textAlign: "start" }}>
            The most <br /> comprehensive <br />{" "}
            <span style={{ fontStyle: "italic" }}>analysis of your face</span>
          </h1>
        </div>
        <div className="imageContainer">
          {pageImages.map((image, index) => (
            <img src={image} key={index} alt="page" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollContent;
