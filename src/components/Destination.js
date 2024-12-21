import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navigation from "./Navigation";

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState("Moon");
  const destinations = {
    Moon: {
      image: "../destination/image-moon.png",
      title: "Europa",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. ",
      infDist: "Avg. distance",
      infoTime: "Est. travel time ",
      infKm: " 384,400 km",
      inf: " 3 days",
    },
    Mars: {
      image: "../destination/image-mars.png",
      title: "Mars",
      description:
        " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!  ",
      infDist: " Avg. distance ",
      infoTime: "Est. travel time ",
      infKm: "225 mil. km",
      inf: "9 months",
    },
    Europa: {
      image: "../destination/image-europa.png",
      title: "Europa",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin. ",
      infDist: "Avg. distance",
      infoTime: "Est. travel time ",
      infKm: "628 mil. km",
      inf: "3 years",
    },
    Titan: {
      image: "../destination/image-titan.png",
      title: "Europa",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. ",
      infDist: "Avg. distance",
      infoTime: "Est. travel time ",
      infKm: "1.6 bil. km",
      inf: "7 years",
    },
  };
  return (
    <div className="destinationBackground">
      <Navigation />
      <div className="section sectionDestination">
        <div>
          <h3 className="mainTitle">
            <span className="mainNumber">01</span>
            Pick your destination
          </h3>
        </div>
        <div className="grid gridDestination">
          <div className="imageContainer">
            <div className="destinationImageBox halfCircle">
              <img
                src={destinations[selectedDestination].image}
                className="destinationImage"
                alt={selectedDestination}
              />
              <div class="halfBlackCircle"></div>
            </div>
          </div>

          <div className="destinationInfo">
            <div className="destinationMenu">
              {Object.keys(destinations).map((destination) => (
                <h6
                  key={destination}
                  className={` ${
                    selectedDestination === destination ? "active" : ""
                  } destinationTitle`}
                  onClick={() => setSelectedDestination(destination)}
                >
                  {destination}
                </h6>
              ))}
            </div>
            <div>
              <h2>
                {" "}
                <h2 className="subTitle">{selectedDestination}</h2>{" "}
              </h2>
            </div>
            <div className="destinationTextBox">
              <p className="paragraph paragraphDestination">
                {destinations[selectedDestination].description}
              </p>
              <hr className="destinationLine" />
              <div className="destinationInformationBox">
                <div className="destionationInfo">
                  <p className="destDistance">
                    {destinations[selectedDestination].infDist}
                  </p>
                  <p className="destKm">
                    {destinations[selectedDestination].infKm}
                  </p>
                </div>
                <div className="destionationInf">
                  <p className="destTime">
                    {destinations[selectedDestination].infoTime}
                  </p>
                  <p className="destInf">
                    {destinations[selectedDestination].inf}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
