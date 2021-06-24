import React from "react";

import './Typing'

import { ReactComponent as Logo } from "../assets/search.svg";
import { ReactComponent as Travellers } from "../assets/cover-travellers.svg";
import { ReactComponent as Star } from "../assets/cover-star.svg";
import { ReactComponent as Destination } from "../assets/cover-destination.svg";

const ShowcaseSection = () => {
  return (
    <div className="showcase-container">
      <div
        className="d-flex flex-column  justify-content-center  align-items-center text-white"
        style={{ width: "100%", height: "100%" }}
      >
        <h1
          className="showcase-header"
          style={{ fontSize: "3.5vw", fontWeight: "600", marginBottom: "2vh" }}
        >
          India's Coolest Travel Community
        </h1>
        <h1
          className="showcase-lead"
          style={{ fontSize: "2vw", fontWeight: "600", marginBottom: "40vh" }}
        >
          <span></span>
          <span
            className="txt-type"
            data-wait="3000"
            data-words='["Spreading Happiness","Connecting People", " Creating Memories", " Creating Stories", " Fulfilling Adventure"]'
          ></span>
        </h1>
        <div className="showcase-input-box-container">
          <div className="showcase-input-box">
            <input type="text" placeholder="Where do you wanna go?" />
            <Logo className="search-icon" />
          </div>
        </div>
      </div>
      <div className="showcase-grid">
        <div className="showcase-grid-item">
          <Travellers className="showcase-grid-item-svg" />
          <div className="showcase-grid-item-content">
            50000+
            <br />
            Happy Travellers
          </div>
        </div>
        <div className="showcase-grid-item">
          <Star className="showcase-grid-item-svg" />
          <div className="showcase-grid-item-content">
            2000+
            <br />5 Star Ratings
          </div>
        </div>
        <div className="showcase-grid-item">
          <Destination className="showcase-grid-item-svg" />
          <div className="showcase-grid-item-content">
            300+
            <br />
            Itineraries
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
