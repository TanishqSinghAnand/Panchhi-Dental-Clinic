import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navbar background h-nav-resp">
      <div className="lhs">
        <img
          src="https://i.ibb.co/PTjZtFm/Panchhi-Dental-Clinic.png"
          alt="Panchhi Dental Clinic Logo"
          className="logo"
        />
      </div>
      <div className="rhs">
        <Link to="/timings">
          <button className="direct">
            <h5 className="btnText">Timings</h5>
          </button>
        </Link>

        <Link to="/contact">
          <button className="direct">
            <h5 className="btnText">Contact</h5>
          </button>
        </Link>

        <Link to="/gallery">
          <button className="direct">
            <h5 className="btnText">Gallery</h5>
          </button>
        </Link>

        <Link to="/faq">
          <button className="direct">
            <h5 className="btnText">FAQs</h5>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
