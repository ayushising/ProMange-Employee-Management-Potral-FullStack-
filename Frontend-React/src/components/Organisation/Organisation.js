import React from "react";
import "./pdf.css";
import data from "../Images/data.png";
import Project from "../Images/Project.png";
import Incident from "../Images/Incident.png";
import Middleware from "../Images/Middleware.png";
import IT from "../Images/IT.png";

import OS from "../Images/OS.png";
import Network from "../Images/Network.png";
import Cyber from "../Images/Cyber.png";

import Dress from "../Images/Dress.png";
import Corporate from "../Images/Corporate.png";
import Ethics from "../Images/Ethics.png";
import Gift from "../Images/Gift.png";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Organisation = () => {
  const navigate = useNavigate();

  const handleClick = (val) => {
    navigate("/pdf", { state: val });
  };
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Navbar />
      <div>
        <p
          className=" text-center "
          style={{ fontSize: "36px", marginTop: "5%" }}
        >
          Organisation
        </p>
        {/* <Pdf pdf={"/SOP-database.pdf"} /> */}
        <div className="ml-20" style={{}}>
          <p className=" ml-20 mb-7" style={{ fontSize: "35px" }}>
            SOP Documents
            <hr
              className="w-36 h-1  my-2 bg-red-700 border-0 rounded  dark:bg-red-700"
              style={{ width: "75rem", marginRight: "5px" }}
            />
          </p>
          <div className=" flex mb-6">
            <img
              className=" h-44 w-44 ml-10 "
              src={data}
              alt=""
              onClick={() => {
                handleClick("/SOP-database.pdf");
              }}
            />
            <img
              className=" h-44 w-44 ml-10 "
              src={Project}
              alt=""
              onClick={() => {
                handleClick("/SOP-projectManagement.pdf");
              }}
            />
            <img
              className=" h-44 w-44 ml-10 "
              src={Incident}
              alt=""
              onClick={() => {
                handleClick("/SOP-incident.pdf");
              }}
            />
            <img
              className=" h-44 w-44 ml-10 "
              src={Middleware}
              alt=""
              onClick={() => {
                handleClick("/SOP-middleware.pdf");
              }}
            />
            <img
              className=" h-44 w-44 ml-10 "
              src={IT}
              alt=""
              onClick={() => {
                handleClick("/SOP-ITdept.pdf");
              }}
            />
          </div>
        </div>
        <div className="ml-20">
          <p className=" ml-20" style={{ fontSize: "35px" }}>
            SCD Documents
            <hr
              className="w-36 h-1  my-2 bg-red-700 border-0 rounded  dark:bg-red-700"
              style={{ width: "75rem", marginRight: "5px" }}
            />
          </p>
          <div className=" flex mb-6">
            <img
              className=" h-44 w-44 ml-10 "
              src={OS}
              alt=""
              onClick={() => {
                handleClick("/SCD-operatingSystem.pdf");
              }}
            />
            <img
              className=" h-44 w-44 ml-10 "
              src={Network}
              alt=""
              onClick={() => {
                handleClick("/SCD-networkDevices.pdf");
              }}
            />
            <img
              className=" h-44 w-44 ml-10 "
              src={Cyber}
              alt=""
              onClick={() => {
                handleClick("/CybersecurityPolicy.pdf");
              }}
            />
          </div>
        </div>
        <div className="ml-20">
          <p className=" ml-20" style={{ fontSize: "35px" }}>
            Corporate Policies
            <hr
              className="w-36 h-1 my-2 bg-red-700 border-0 rounded  dark:bg-red-700"
              style={{ width: "75rem", marginRight: "5px" }}
            />
          </p>
          <div className=" flex mb-6">
            <img
              className=" h-44 w-44 ml-10 "
              src={Dress}
              alt=""
              onClick={() => {
                handleClick("/DressCodePolicy.pdf");
              }}
            />
            <img
              className=" h-44 w-44 ml-10 "
              src={Corporate}
              alt=""
              onClick={() => {
                handleClick("/CorporateGovernancePolicy.pdf");
              }}
            />
            <img
              className=" h-44 w-44 ml-10 "
              src={Ethics}
              alt=""
              onClick={() => {
                handleClick("/CodeOfEthicsPolicy.pdf");
              }}
            />
            <img
              className=" h-44 w-44 ml-10 "
              src={Gift}
              alt=""
              onClick={() => {
                handleClick("/GiftingPolicy.pdf");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organisation;
