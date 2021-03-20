import React, { useState, useEffect } from "react";
import { ReactComponent as CloseMenu } from "./x.svg";
import { ReactComponent as MenuIcon } from "./menu.svg";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const check = true;
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
            <img
              src="https://i.ibb.co/PTjZtFm/Panchhi-Dental-Clinic.png"
              width="50px"
              height="50px"
              alt="Logo"
            />
          </a>
          <h2>Panchhi Dental Clinic</h2>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "1vw",
                padding: "2px",
              }}
              to="/timings"
            >
              <h5 className="btnText">Timings</h5>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "1vw",
                padding: "2px",
              }}
              to="/contact"
            >
              <h5 className="btnText">Contact</h5>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "1vw",
                padding: "2px",
              }}
              to="/gallery"
            >
              <h5 className="btnText">Gallery</h5>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "1vw",
                padding: "2px",
              }}
              to="/faq"
            >
              <h5 className="btnText">FAQs</h5>
            </Link>
          </li>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
