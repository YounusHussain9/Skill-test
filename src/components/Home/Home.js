import React from "react";
import "./Home.css";
import ImageAnimation from "../AnimatedSection/AnimatedSection";

const Test = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        paddingTop: "10rem",
      }}
      className="container"
    >
      <div style={{ position: "relative", width: "60%", fontWeight: "400" }}>
        <h4 style={{ textAlign: "start", fontSize: "40px", marginBottom: "0" }}>
          Documented into <br />
          200 pages <span style={{ fontStyle: "italic" }}>report of you</span>
        </h4>
        <p style={{ textAlign: "start", fontSize: "24px", marginTop: "10px" }}>
          Professional facial assessments and clear facial <br /> changes
          visualisation.
        </p>

        <button
          style={{
            position: "absolute",
            left: "0",
            backgroundColor: "#809AA3",
            width: "200px",
            padding: "1rem",
            color: "#FFFFFF",
            outline: "none",
            border: "none",
          }}
        >
          ALL REPORTS
        </button>
      </div>

      <ImageAnimation />
    </div>
  );
};

export default Test;
