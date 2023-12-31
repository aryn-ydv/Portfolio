import "./App.css";
import Home from "./screens/home/Home";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Portfolio from "./res/logo.png";
import Breifcase from "./res/briefcase.png";
import Calculator from "./res/calculator.png";

function App() {
  return (
    <div className="appContainer">
      <div className="heroSlideContainer flex">
        <Home />
      </div>
      <div className="projectSlideContainer flex">
        <div className="projectCaption">Projects</div>
        <Carousel
          infiniteLoop="true"
          autoPlay="true"
          interval={2000}
          swipeable="true"
          emulateTouch="true"
          showStatus={false}
          showArrows={false}
          className="projectCarousel flex"
        >
          <Project name="Portfolio Application" image={Portfolio} link="." />
          <Project name="Currency Calculator" image={Calculator} />
          <Project
            name="Rojgarweb.info"
            image={Breifcase}
            link="http://www.rojgarweb.info"
          />
        </Carousel>
      </div>
      <div className="contactSlideContainer flex">
        <div className="contactCaption">Contact Form</div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
