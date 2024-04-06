import React, { useState, useEffect, useRef } from "react";
import "./ScrollContent.css";
import Test from "../Home/Home";

const ScrollContent = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const debounceTimer = useRef(null);

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

      if (isAtEnd && !isEnd) {
        // Debounce the end of scroll handling
        if (debounceTimer.current) clearTimeout(debounceTimer.current);
        debounceTimer.current = setTimeout(() => setIsEnd(true), 2000); // 100ms delay for smoother transition
      }
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (section) {
        section.removeEventListener("scroll", handleScroll);
      }
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  console.log(lastScroll);
  return (
    <>
      {isEnd ? (
        <Test />
      ) : (
        <section style={{ overflow: "hidden" }}>
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
                <>
                  <img src={image} key={index} alt="page" />
                </>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ScrollContent;
