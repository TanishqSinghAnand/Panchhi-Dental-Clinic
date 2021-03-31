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
function App() {
  return (
    <div style={{ height: "100%" }}>
      <Header/>
      {/* <Router> */}
        {/* <Redirect to="/home" /> */}
        {/* <Switch> */}
          {/* <Route path="/home"> */}
            <section id = "#">
            <Home />
            </section>
          {/* </Route> */}
          {/* <Route path="/contact"> */}
            <section id="contact">
            <Contact />
            </section>
          {/* </Route> */}
          {/* <Route path="/faq"> */}
            <section id="faq">
            <Faq />
            </section>
          {/* </Route> */}
          {/* <Route path="/gallery"> */}
            <section id="gallery">
            <Gallery />
            </section>
          {/* </Route> */}
          {/* <Route path="/timings"> */}
            <section id="timmings">
            <Timings />
            </section>
          {/* </Route> */}
        {/* </Switch> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
