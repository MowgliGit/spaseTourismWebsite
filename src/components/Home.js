import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Destination() {
  return (
    <div className="homeBackground">
      <Navigation />
      <div className="homeSection">
        <div className="homeGrid">
          <div className="homeTextBox">
            <p className="homeSubheading">So, you want to travel to</p>
            <h1 className="homeHeading">Space</h1>
            <p className="paragraph paragraphHome">
              {" "}
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="homeImageBox">
            <Link to="/destination" className="homeCircleBox">
              <div className="circleBackground"></div>
              <div className="circleHome">
                <a className="circleHomeLink">Explore</a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
