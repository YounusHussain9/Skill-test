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
      <div
        style={{ position: "relative", width: "60%", fontWeight: "400" }}
        className="text_content"
      >
        <h4
          style={{ textAlign: "start", fontSize: "40px", marginBottom: "0" }}
          className="heading"
        >
          Documented <br className="h_br_1" /> into <br className="h_br_2" />
          200 pages{" "}
          <span style={{ fontStyle: "italic", fontFamily: "NeueItalic" }}>
            report of you
          </span>
        </h4>
        <p
          style={{ textAlign: "start", fontSize: "24px", marginTop: "10px" }}
          className="pera"
        >
          Professional facial assessments and clear facial{" "}
          <br className="p_br_1" /> changes visualisation.
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
          className="btn_1"
        >
          ALL REPORTS
        </button>
      </div>

      <ImageAnimation />
      <button
        style={{
          position: "absolute",
          left: "0",
          backgroundColor: "#809AA3",
          width: "86%",
          padding: "1rem",
          color: "#FFFFFF",
          outline: "none",
          border: "none",
          bottom: "-10rem",
          transform: " translate(20px, 10px)",
        }}
        className="btn_2"
      >
        ALL REPORTS
      </button>
    </div>
  );
};

export default Test;
