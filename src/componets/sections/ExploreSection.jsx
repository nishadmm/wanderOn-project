import React from "react";

import { ReactComponent as Backpacking } from "../assets/backpacking-trips.svg";
import { ReactComponent as Weekend } from "../assets/weekend-trips.svg";
import { ReactComponent as Workcations } from "../assets/workcations.svg";
import { ReactComponent as Scuba } from "../assets/scuba.svg";
import { ReactComponent as Customised } from "../assets/customised-trips.svg";
import { ReactComponent as Corporate } from "../assets/corporate-trips.svg";

const ExploreSection = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
    >
      <div>
        <div className="explore-section">
          <div className="explore-section-header">Explore WanderOn</div>
          <div className="explore-section-content">
            <a href="#!">
              {" "}
              <div className="explore-item">
                {" "}
                <Backpacking className="explore-item-svg" />{" "}
                <div className="explore-item-text">Backpacking trips</div>{" "}
              </div>
            </a>
            <a href="#!">
              {" "}
              <div className="explore-item">
                {" "}
                <Weekend className="explore-item-svg" />{" "}
                <div className="explore-item-text">weekend trips</div>{" "}
              </div>
            </a>
            <a href="#!">
              {" "}
              <div className="explore-item">
                {" "}
                <Workcations className="explore-item-svg" />{" "}
                <div className="explore-item-text">workcations stays</div>{" "}
              </div>
            </a>
            <a href="#!">
              {" "}
              <h1 className="explore-item">
                {" "}
                <Scuba className="explore-item-svg" />{" "}
                <p className="explore-item-text">Adventure courses</p>{" "}
              </h1>
            </a>
            <a href="#!">
              {" "}
              <div className="explore-item">
                {" "}
                <Customised className="explore-item-svg" />{" "}
                <div className="explore-item-text">customized trips</div>{" "}
              </div>
            </a>
            <a href="#!">
              {" "}
              <div className="explore-item">
                {" "}
                <Corporate className="explore-item-svg" />{" "}
                <div className="explore-item-text">corporate trips</div>{" "}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
