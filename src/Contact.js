import React from "react";
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import "./Contact.css";
import Header from "./Components/Header/Header";


function Contact() {
  return (
    <div className="con">
      {/* <Header /> */}
      <div className="contact">
        <div className="contact__divs">
          Email ID ={" "}
          <a href="mailto:gurpreetananddr@gmail.com" className="an">
            gurpreetananddr@gmail.com
          </a>
        </div>
        <BrowserView>
          <div className="contact__divs">Phone Number - 9872006958</div>
        </BrowserView>
        <MobileView>
          <div className="contact__divs">
            Phone Number <a href="tel:9872006958">9872006958</a>
          </div>
        </MobileView>
        <div className="contact__divs">
          <a href="" className="an">
            Email
          </a>
        </div>
        <div className="contact__divs">
          Address ={" "}
          <a href="https://goo.gl/maps/WUY1FMRiV8dmGVxi9" className="an">
            Panchhi Dental Clinic SCO 28 Sector 41 D Chandigarh
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
