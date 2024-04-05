import React from "react";
import "./Navbar.css";

const Navbar = ({ fullWidth }) => {
  return (
    <>
      <nav className={`navbar navbar-given-width`}>
        <ul>
          <li>
            <img src={"/images/menu.svg"} alt="Logo" />
          </li>
          <li>QOVES</li>
          <div
            style={{ height: "45px", width: "2px", backgroundColor: "#E9EAEB" }}
          ></div>

          <li style={{ display: "flex", gap: "5px" }}>
            <img src={"/images/shoping_cart.svg"} alt="Logo" />
            Cart (0)
          </li>
          <div
            style={{ height: "45px", width: "2px", backgroundColor: "#E9EAEB" }}
          ></div>

          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: "25px",
              paddingRight: "1rem",
            }}
          >
            Free facial assessment
            <div
              style={{
                height: "25px",
                width: "2px",
                backgroundColor: "#E9EAEB",
              }}
            ></div>
            <img src={"/images/forward_arrorw.svg"} alt="Logo" />
          </li>
          {/* <li>➔</li> */}
        </ul>
      </nav>

      <nav className={`navbar navbar-full-width`}>
        <ul>
          <li style={{ paddingLeft: "1rem" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <img src={"/images/menu.svg"} alt="Logo" />
              <div
                style={{
                  height: "45px",
                  width: "2px",
                  backgroundColor: "#E9EAEB",
                }}
              ></div>
              <img src={"/images/logo.svg"} alt="Logo" />
            </div>
          </li>

          <li style={{ display: "flex", gap: "30px", paddingRight: "1rem" }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <span>Free facial assessment</span>
              <span
                style={{ backgroundColor: "#C2DDE4", padding: ".2rem .5rem" }}
              >
                Free
              </span>
            </div>
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img
                src={"/images/shoping_cart.svg"}
                alt="Logo"
                style={{ height: "20px" }}
              />
              <span> Cart (0)</span>
            </div>
          </li>
        </ul>
      </nav>

      <nav className={`navbar sm-navbar`}>
        <ul>
          <li>
            {" "}
            <img src={"/images/logo.svg"} alt="Logo" />
          </li>
          <li style={{ display: "flex", gap: "20px", paddingRight: "1rem" }}>
            <div style={{ display: "flex", gap: "5px" }}>
              <img src={"/images/shoping_cart.svg"} alt="Logo" />
              <span>0</span>
            </div>
            <img src={"/images/menu.svg"} alt="Logo" />
          </li>{" "}
        </ul>

        <div style={{ display: "flex", justifyContent: "space-between", padding:'1rem' }}>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <span>Free facial assessment</span>
            <span
              style={{ backgroundColor: "#C2DDE4", padding: ".2rem .5rem" }}
            >
              Free
            </span>
          </div>
          <img src={"/images/forward_arrorw.svg"} alt="Logo" />

        </div>
      </nav>
    </>
  );
};

export default Navbar;
