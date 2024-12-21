import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navigation from "./Navigation";
export default function Technology() {
  const [selectedTechnology, setSelectedTechnology] = useState("button1");
  const technology = {
    button1: {
      number: "1",
      title: "The terminology ...",
      name: "Launch vehicle",
      img: "./technology/image-launch-vehicle-portrait.jpg",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    button2: {
      number: "2",
      title: "The terminology ... ",
      name: "Spaceport",
      img: "./technology/image-spaceport-portrait.jpg",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    button3: {
      number: "3",
      title: "The terminology ... ",
      name: " Space capsule ",
      img: "./technology/image-space-capsule-portrait.jpg",

      description:
        " A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  };
  function Buttons({ buttonKey }) {
    return (
      <div
        className={`techBtn ${
          selectedTechnology === buttonKey ? "activBtn" : ""
        }`}
        onClick={() => setSelectedTechnology(buttonKey)}
      >
        <span
          className={`techNumber ${
            selectedTechnology === buttonKey ? "activBtn" : ""
          }`}
        >
          {technology[buttonKey].number}
        </span>
      </div>
    );
  }

  return (
    <div className="technnologyBackground">
      <Navigation />
      <div className="sectionTechnology">
        <div>
          <h3 className="mainTitle mainTitleTech">
            <span className="mainNumber">03</span> Space launch 101
          </h3>
        </div>
        <div className="gridTechology">
          <div className="technologyButtons">
            {Object.keys(technology).map((tech) => (
              <Buttons key={tech} buttonKey={tech} />
            ))}
          </div>
          <div className="techTextBox">
            <div>
              <h6 className="techTitle">
                {technology[selectedTechnology].title}
              </h6>
            </div>
            <div>
              <h2 className="techName">
                {technology[selectedTechnology].name}
              </h2>
            </div>
            <div>
              <p className="paragraph techParagraph">
                {technology[selectedTechnology].description}
              </p>
            </div>
          </div>

          <div className="techImageContainer">
            <img
              src={technology[selectedTechnology].img}
              className="techImg"
              alt="image for technology"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
