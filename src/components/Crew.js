import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navigation from "./Navigation";
export default function Destination() {
  const [selectedCrew, setSelectedCrew] = useState("circle1");
  const crews = {
    circle1: {
      title: "Commander",
      image: "./crew/image-douglas-hurley.png",
      name: "Douglas Hurley",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    circle2: {
      title: "Mission Specialist",
      image: "./crew/image-mark-shuttleworth.png",
      name: "Mark Shuttleworth",
      description:
        " Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    circle3: {
      title: "Pilot",
      image: "./crew/image-victor-glover.png",
      name: " Victor Glover",
      description:
        " Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    circle4: {
      title: "Flight Engineer ",
      image: "./crew/image-anousheh-ansari.png",
      name: "Anousheh Ansari ",
      description:
        " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  };

  return (
    <div className="crewBackground">
      <Navigation />
      <div className="section sectionCrew">
        <div>
          <h3 className="mainTitle">
            <span className="mainNumber">02</span> Meet your crew
          </h3>
        </div>
        <div className="grid gridCrew">
          <div className="crewTextBox">
            <div className="crewItem">
              <div>
                <h3 className="crewTitle">{crews[selectedCrew].title}</h3>
              </div>
              <div>
                <h2 className="crewName">{crews[selectedCrew].name}</h2>
              </div>
              <div>
                <p className="paragraph crewparagraph">
                  {crews[selectedCrew].description}
                </p>
              </div>
            </div>
            <div className="circles">
              {Object.keys(crews).map((crew) => (
                <div
                  key={crew}
                  className={` ${selectedCrew === crew ? "activ" : ""} circle`}
                  onClick={() => setSelectedCrew(crew)}
                >
                  &nbsp;
                </div>
              ))}
            </div>
          </div>
          <div className="crewImageContainer">
            <img
              src={crews[selectedCrew].image}
              className="crewImg"
              alt="crewImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
