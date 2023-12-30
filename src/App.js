import "./App.css";
import Home from "./screens/home/Home";
import Project from "./components/project/Project";

function App() {
  return (
    <div className="appContainer">
      <div className="heroSlideContainer flex">
        <Home />
      </div>
      <div className="projectSlideContainer flex">
        <Project name="portfolio" />
      </div>
      <div className="contactSlideContainer flex">
        <Project name="portfolio application" />
      </div>
    </div>
  );
}

export default App;
