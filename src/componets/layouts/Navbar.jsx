import React from "react";

import { ReactComponent as Logo } from "../assets/Wanderon-logo.svg";

window.addEventListener("scroll", function (e) {
  var nav = document.getElementById("navbar");
  if (
    document.documentElement.scrollTop ||
    document.body.scrollTop > window.innerHeight
  ) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } else {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
  }
});

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg text-white fixed-top py-0 "
      style={{transition: " all 0.3s ease "}}
    >
      <a href="#!">
        <Logo
          className="nav-logo"
          style={{ width: "8vh", height: "7vh", marginLeft: "4vh" }}
        />
      </a>
      <div
        className="d-flex d-lg-none align-items-center justify-content-center"
        style={{ width: "50%" }}
      >
        <i className="bi bi-telephone-fill me-2"></i>
        <div
          className="nav-phone-number"
          style={{ fontSize: "1vw", cursor: "pointer" }}
        >
          +91-8887756502
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <i className="bi bi-list text-white"></i>
      </button>
      <div id="navmenu" className="collapse navbar-collapse">
        <div
          className="d-none d-lg-flex align-items-center justify-content-center"
          style={{ width: "50%" }}
        >
          <i className="bi bi-telephone-fill me-2"></i>
          <div style={{ fontSize: "1vw", cursor: "pointer" }}>
            +91-8887756502
          </div>
        </div>
        <div className="d-flex justify-content-center" style={{ width: "50%" }}>
          <ul className="navbar-nav" style={{ fontSize: "1.8vh" }}>
            <li className="nav-item">
              <a href="#!" className="nav-link  text-white">
                TRENDING TRIPS
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link  text-white">
                WORKCATIONS
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link  text-white">
                BLOGS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
