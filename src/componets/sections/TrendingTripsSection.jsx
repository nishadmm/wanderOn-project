import React from "react";

import imageOne from "../assets/tripsImages/imageOne.jpg";
import imageTwo from "../assets/tripsImages/imageTwo.jpg";
import imageThree from "../assets/tripsImages/imageThree.jpg";
import imageFour from "../assets/tripsImages/imageFour.jpg";
import clock from "../assets/tripsImages/clock.png";
import map from "../assets/tripsImages/map-pin.png";
import { ReactComponent as Camping } from "../assets/tripsImages/svgs/camping.svg";
import { ReactComponent as Biking } from "../assets/tripsImages/svgs/biking.svg";
import { ReactComponent as Trekking } from "../assets/tripsImages/svgs/trekking.svg";

const TrendingTripsSection = () => {
  return (
    <div>
      <div className="trending-trip-header">Trending Trips</div>
      <div className="trending-trip-container">
        <div className="arrow-btn-container">
          <button type="button" className="arrow-btn">
            {" "}
            <i className="bi bi-arrow-left"></i>{" "}
          </button>
        </div>
        {/* Image One */}
        <div className="card-container">
          <div>
            <a target="_blank" href="#!">
              <div className="link-content">
                <div className="img-container">
                  <div
                    className="img-content"
                    style={{
                      background: `url(${imageOne}) no-repeat center center/cover`,
                    }}
                  >
                    <div className="img-content-img">
                      <div className="img-content-img-container">
                        <Camping className="card-large-img" />
                        camping
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card-text-container">
                    <div className="card-text-time-date">
                      <div className="card-text-time">
                        <div
                          className="card-text-time-img"
                          style={{
                            background: `url(${clock}) no-repeat center center/cover`,
                          }}
                        >
                          {"  "}
                        </div>
                        5N-6D
                      </div>
                      <div className="card-text-date">
                        <div
                          className="card-text-date-img"
                          style={{
                            background: `url(${map}) no-repeat center center/cover`,
                          }}
                        >
                          {"  "}
                        </div>
                        Delhi
                      </div>
                    </div>
                    <div className="card-text-topic">Spiti Summer</div>
                    <div className="card-text-price">
                      <span className="card-text-price-first"> Starts at </span>
                      <div className="card-text-price-second"> ₹18,999/- </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* image two */}
        <div className="card-container">
          <div>
            <a target="_blank" href="#!">
              <div className="link-content">
                <div className="img-container">
                  <div
                    className="img-content"
                    style={{
                      background: `url(${imageTwo}) no-repeat center center/cover`,
                    }}
                  >
                    <div className="img-content-img">
                      <div className="img-content-img-container">
                        <Biking className="card-large-img" />
                        biking
                      </div>
                      <div className="img-content-img-container">
                        <Camping className="card-large-img" />
                        camping
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card-text-container">
                    <div className="card-text-time-date">
                      <div className="card-text-time">
                        <div
                          className="card-text-time-img"
                          style={{
                            background: `url(${clock}) no-repeat center center/cover`,
                          }}
                        >
                          {"  "}
                        </div>
                        7N-8D
                      </div>
                      <div className="card-text-date">
                        <div
                          className="card-text-date-img"
                          style={{
                            background: `url(${map}) no-repeat center center/cover`,
                          }}
                        >
                          {"  "}
                        </div>
                        Delhi
                      </div>
                    </div>
                    <div className="card-text-topic">
                      Spiti Circuit Biking/Backpacking
                    </div>
                    <div className="card-text-price">
                      <span className="card-text-price-first"> Starts at </span>
                      <div className="card-text-price-second"> ₹26,999/- </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Image three */}
        <div className="card-container">
          <div>
            <a target="_blank" href="#!">
              <div className="link-content">
                <div className="img-container">
                  <div
                    className="img-content"
                    style={{
                      background: `url(${imageThree}) no-repeat center center/cover`,
                    }}
                  >
                    <div className="img-content-img">
                      <div className="img-content-img-container">
                        <Biking className="card-large-img" />
                        biking
                      </div>
                      <div className="img-content-img-container">
                        <Camping className="card-large-img" />
                        camping
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card-text-container">
                    <div className="card-text-time-date">
                      <div className="card-text-time">
                        <div
                          className="card-text-time-img"
                          style={{
                            background: `url(${clock}) no-repeat center center/cover`,
                          }}
                        >
                          {"  "}
                        </div>
                        8N-9D
                      </div>
                      <div className="card-text-date">
                        <div
                          className="card-text-date-img"
                          style={{
                            background: `url(${map}) no-repeat center center/cover`,
                          }}
                        >
                          {"  "}
                        </div>
                        Delhi
                      </div>
                    </div>
                    <div className="card-text-topic">Manali Leh Manali</div>
                    <div className="card-text-price">
                      <span className="card-text-price-first"> Starts at </span>
                      <div className="card-text-price-second"> ₹31,499/- </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Image four */}
        <div className="card-container">
          <div>
            <a target="_blank" href="#!">
              <div className="link-content">
                <div className="img-container">
                  <div
                    className="img-content"
                    style={{
                      background: `url(${imageFour}) no-repeat center center/cover`,
                    }}
                  >
                    <div className="img-content-img">
                      <div className="img-content-img-container">
                        <Biking className="card-large-img" />
                        biking
                      </div>
                      <div className="img-content-img-container">
                        <Camping className="card-large-img" />
                        camping
                      </div>
                      <div className="img-content-img-container">
                        <Trekking className="card-large-img" />
                        trekking
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card-text-container">
                    <div className="card-text-time-date">
                      <div className="card-text-time">
                        <div
                          className="card-text-time-img"
                          style={{
                            background: `url(${clock}) no-repeat center center/cover`,
                          }}
                        >
                          {"  "}
                        </div>
                        5N-6D
                      </div>
                      <div className="card-text-date">
                        <div
                          className="card-text-date-img"
                          style={{
                            background: `url(${map}) no-repeat center center/cover`,
                          }}
                        >
                          {"  "}
                        </div>
                        Delhi
                      </div>
                    </div>
                    <div className="card-text-topic">Meghalaya Backpacking</div>
                    <div className="card-text-price">
                      <span className="card-text-price-first"> Starts at </span>
                      <div className="card-text-price-second"> ₹19,499/- </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="arrow-btn-container arrow-btn-container-right">
          <button type="button" className="arrow-btn">
            {" "}
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingTripsSection;
