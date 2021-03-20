import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Faq from "./FAQ";
import Gallery from "./Gallery";
import Timings from "./Timings";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/timings">
            <Timings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
