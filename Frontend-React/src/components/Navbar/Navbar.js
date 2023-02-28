import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import axisLogo from "../Images/axisLogo.jpeg";

import hal from "../Images/hal.jpg";
const Navbar = () => {
  return (
    <div>
      <div>
        <div className="navbar__component">
          <div className="navbar__logo" style={{ cursor: "pointer" }}>
            <Link to="/home">
              <img
                src={axisLogo}
                style={{ height: "42px", width: "166px", maxWidth: "200%" }}
                alt="hal"
              />
            </Link>
          </div>

          {/* <div className="right">
            <div className="profile">
              <Link
                to="/organization"
                style={{ textDecoration: "none" }}
                className="linknav"
              >
                Organization
              </Link>
            </div> */}
          <div className="right">
            <div className="profile">
              <Dropdown>
                <Dropdown.Toggle
                  style={{ color: "black", border: "none", marginTop: "-5px" }}
                >
                  Organization
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/organization">Organization Docs</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/Products">Our Products</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* <div className="profile">

              <span>My Profile</span>
            </div> */}

            <div className="profile">
              {/* <span>Logout</span> */}
              <Link
                to="/news"
                style={{ textDecoration: "none" }}
                className="linknav"
              >
                News
              </Link>
            </div>

            <div className="profile">
              <Link
                to="/mylearning"
                style={{ textDecoration: "none" }}
                className="linknav"
              >
                My Learnings
              </Link>
            </div>
            <div className="profile">
              <Link
                to="/peersInfo"
                style={{ textDecoration: "none" }}
                className="linknav"
              >
                Peers Info
              </Link>
            </div>

            <div className="profile">
              {/* <span>Logout</span> */}
              <Link
                to="/liveProject"
                style={{ textDecoration: "none" }}
                className="linknav"
              >
                Live Projects
              </Link>
            </div>

            <div className="profile">
              <Dropdown>
                <Dropdown.Toggle
                  style={{ color: "black", border: "none", marginTop: "-5px" }}
                >
                  Profile
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/employeeprofile">My Profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/mydocuments">My Documents</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div style={{ marginLeft: "3rem", marginTop: "4px" }}>
            <button className="button-card" style={{ marginTop: "4px" }}>
              {" "}
              <Link to="/">Logout </Link>
            </button>
          </div>
        </div>
      </div>
      <div class="shadow bottom"></div>
    </div>
  );
};

export default Navbar;
