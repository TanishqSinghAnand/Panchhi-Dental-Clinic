import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Faq from "./FAQ";
import Gallery from "./Gallery";
import Timings from "./Timings";
import Header from "./Components/Header/Header";
import Particles from "react-particles-js";
import Slider from './Components/Image SlideShow/Gallery'
function App() {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      {/* <div className="par">
        <Particles
          // className="par"
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5,
                },
              },
            },
          }}
          style={{
            width: "100%",
            backgroundColor: "black",
          }}
        />
      </div> */}

      <section id="#">
        <Home />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="timmings">
        <Timings />
      </section>
      <section id="gallery">
        {/* <SlideShow /> */}
        <Slider/>
      </section>
    </div>
  );
}

export default App;
