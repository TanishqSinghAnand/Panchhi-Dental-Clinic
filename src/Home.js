import React from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import Header from "./Components/Header/Header";
import { Slide } from "react-slideshow-image";
const slideshow = true;
function Home() {
  return (
    <div className="container">
      {/* <Header /> */}
      <div className="home">
        <center>
          <p className="home__title">Welcome to Panchhi Dental Clinic</p>
        </center>
        <Fade bottom>
          <div className="home__container">
            <div className="home__text">
              <p className="home__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, reiciendis incidunt culpa, consectetur sit vero officia
                sed itaque quod reprehenderit libero nihil a facere! Doloribus
                dolore, ipsam quaerat aspernatur dolor illum nam ullam quam sit
                minus, ad qui iure deleniti adipisci quos at recusandae
                cupiditate distinctio hic necessitatibus. Neque repellendus
                culpa quibusdam saepe nobis unde et! Debitis id nemo, temporibus
                porro quae sed quos omnis qui. Impedit, blanditiis aliquid.
                Sequi.{" "}
              </p>
            </div>

            {/*  */}
            <div className="home__thumb">
              <img
                src="https://media.oralhealthgroup.com/uploads/2020/02/ISCS-press-image-sinius-1024x768.jpg"
                width="100%"
                hwight="60"
                alt=""
                className="homeThumb__thumbnail"
              />
              <div className="spacing"></div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
