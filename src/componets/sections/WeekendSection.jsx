import React from "react";

import ImageOne from "../assets/weekendImages/weekendOne.jpg";
import ImageTwo from "../assets/weekendImages/weekendTwo.jpg";
import ImageThree from "../assets/weekendImages/weekendThree.jpg";
import ImageFour from "../assets/weekendImages/weekendFour.jpg";
import clock from "../assets/tripsImages/clock.png";
import map from "../assets/tripsImages/map-pin.png";
import { ReactComponent as Camping } from "../assets/tripsImages/svgs/camping.svg";
import { ReactComponent as Para } from "../assets/weekendImages/svg/paragliding.svg";
import { ReactComponent as Snow } from "../assets/weekendImages/svg/snow-paradise.svg";
import { ReactComponent as Raft } from "../assets/weekendImages/svg/rafting.svg";
import { ReactComponent as Trekking } from "../assets/tripsImages/svgs/trekking.svg";

const WeekendSection = () => {
  return (
    <div>
      <div className="trending-trip-header">Weekend Trips</div>
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
                      background: `url(${ImageOne}) no-repeat center center/cover`,
                    }}
                  >
                    <div className="img-content-img">
                      <div className="img-content-img-container">
                        <Para className="card-large-img" />
                        paragliding
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
                        1N-2D
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
                    <div className="card-text-topic">Bir Billing</div>
                    <div className="card-text-price">
                      <span className="card-text-price-first"> Starts at </span>
                      <div className="card-text-price-second"> ₹6,999/- </div>
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
                      background: `url(${ImageTwo}) no-repeat center center/cover`,
                    }}
                  >
                    <div className="img-content-img">
                      <div className="img-content-img-container">
                        <Snow className="card-large-img" />
                        snow paradise
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
                        2N-3D
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
                      Manali Lahaul Atal Tunnel
                    </div>
                    <div className="card-text-price">
                      <span className="card-text-price-first"> Starts at </span>
                      <div className="card-text-price-second"> ₹6,999/- </div>
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
                      background: `url(${ImageThree}) no-repeat center center/cover`,
                    }}
                  >
                    <div className="img-content-img">
                      <div className="img-content-img-container">
                        <Trekking className="card-large-img" />
                        trekking
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
                        2N-3D
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
                    <div className="card-text-topic">Kasol Kheerganga</div>
                    <div className="card-text-price">
                      <span className="card-text-price-first"> Starts at </span>
                      <div className="card-text-price-second"> ₹5,999/- </div>
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
                      background: `url(${ImageFour}) no-repeat center center/cover`,
                    }}
                  >
                    <div className="img-content-img">
                      <div className="img-content-img-container">
                        <Trekking className="card-large-img" />
                        trekking
                      </div>
                      <div className="img-content-img-container">
                        <Raft className="card-large-img" />
                        rafting
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
                        2N-3D
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
                    <div className="card-text-topic">Tirthan Valley</div>
                    <div className="card-text-price">
                      <span className="card-text-price-first"> Starts at </span>
                      <div className="card-text-price-second"> ₹6,999/- </div>
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

export default WeekendSection;
