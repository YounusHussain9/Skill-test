import React, { useState, useEffect, useRef } from "react";
import "./ScrollContent.css";
import Test from "../Home/Home";

const ScrollContent = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const sectionRef = useRef(null);

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

  const handleScroll = () => {
    if (sectionRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = sectionRef.current;

      const isAtEnd = scrollLeft + offsetWidth >= scrollWidth;
      if (isAtEnd) {
        setIsEnd(true);
        console.log("Reached end of horizontal scroll");
        // Handle the end-of-scroll scenario
      }
      setLastScroll(scrollLeft);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener
    return () => {
      if (section) {
        section.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Here you can use lastScroll as needed
  useEffect(() => {
    console.log("Last scroll position in section: ", lastScroll);
  }, [lastScroll]);

  console.log(lastScroll);
  return (
    <>
      {isEnd ? (
        <Test />
      ) : (
        <section>
          <div className="smTextContainer">
            <h1 style={{ textAlign: "center" }}>
              The most <br /> comprehensive <br />{" "}
              <span style={{ fontStyle: "italic" }}>analysis of your face</span>
            </h1>
          </div>
          <div className="contentContainer" ref={sectionRef}>
            <div className="textContainer">
              <h1 style={{ textAlign: "start" }}>
                The most <br /> comprehensive <br />{" "}
                <span style={{ fontStyle: "italic" }}>
                  analysis of your face
                </span>
              </h1>
            </div>
            <div className="imageContainer">
              {pageImages.map((image, index) => (
                <img src={image} key={index} alt="page" />
              ))}
            </div>
            {isEnd ? <Test /> : null}
          </div>
        </section>
      )}
    </>
  );
};

export default ScrollContent;
