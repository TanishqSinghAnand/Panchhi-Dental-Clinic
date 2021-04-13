import React, { useState, useEffect } from "react";
import { ReactComponent as CloseMenu } from "./x.svg";
import { ReactComponent as MenuIcon } from "./menu.svg";
import "./header.css";
import { Link } from "react-router-dom";
import { ReactNavbar } from "react-responsive-animate-navbar";
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const check = true;
  return (
    <div className="lol" style={{ width: "100%" }}>
      {/* <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
            <img
              src="https://i.ibb.co/PTjZtFm/Panchhi-Dental-Clinic.png"
              width="50px"
              height="50px"
              alt="Logo"
            />
          </a>
          <p>Panchhi Dental Clinic</p>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a
              style={{
                textDecoration: "none",
                color: "#000",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "0.1vw",
                padding: "0.2px",
              }}
              href="#timmings"
            >
              <h5 className="btnText">Timings</h5>
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a
              style={{
                textDecoration: "none",
                color: "#000",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "0.1vw",
                padding: "2px",
              }}
              href="#contact"
            >
              <h5 className="btnText">Contact</h5>
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a
              style={{
                textDecoration: "none",
                color: "#000",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "0.1vw",
                padding: "2px",
              }}
              href="#gallery"
            >
              <h5 className="btnText">Gallery</h5>
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a
              style={{
                textDecoration: "none",
                color: "#000",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "0.1vw",
                padding: "2px",
              }}
              href="#faq"
            >
              <h5 className="btnText">FAQs</h5>
            </a>
          </li>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div> */}
      <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="https://i.ibb.co/PTjZtFm/Panchhi-Dental-Clinic.png"
        menu={[
          { name: "Timings", to: "#timmings" },
          { name: "Contacts", to: "#contact" },
          { name: "Gallery", to: "#gallery" },
          { name: "FAQs", to: "#faq" },
        ]}
        social={[
          {
            name: "Linkedin",
            url:
              "https://www.linkedin.com/in/dr-gurpreet-kaur-anand-2b080b20b/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/gurpreet.anand.7739/",
            icon: ["fab", "facebook-f"],
          },
        ]}
      />
      {/* <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="https://svgshare.com/i/KHh.svg"
        menu={[
          { name: "HOME", to: "/" },
          { name: "ARTICLES", to: "/articles" },
          { name: "ABOUT ME", to: "/about" },
          { name: "CONTACT", to: "/contact" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]} */}
      {/* /> */}
    </div>
  );
};

export default Header;
