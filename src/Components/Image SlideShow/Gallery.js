import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import './Gallery.css'

const Slider = () => (
  <div className="slider" >
    <AwesomeSlider animation="cubeAnimation">
      <div data-src="https://i.ibb.co/qC58WPc/1.jpg" />
      <div data-src="https://i.ibb.co/r4QyXZM/2.jpg" />
      <div data-src="https://i.ibb.co/cNrWqmX/3.jpg" />
    </AwesomeSlider>
    <div className="apcing"/>
  </div>
);
export default Slider;
{/* <a href="https://ibb.co/kJ1T9Ww"><img src="https://i.ibb.co/qC58WPc/1.jpg" alt="1" border="0"></a>
<a href="https://ibb.co/gzrgcDw"><img src="https://i.ibb.co/r4QyXZM/2.jpg" alt="2" border="0"></a>
<a href="https://ibb.co/4jVbkQg"><img src="https://i.ibb.co/cNrWqmX/3.jpg" alt="3" border="0"></a> */}