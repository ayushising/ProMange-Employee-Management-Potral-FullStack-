import React, { useState } from "react";
import "./Card.css";

function Card({ img, name, dob, email, contactNo, designation, department }) {
  return (
    <div>
      <p style={{ fontSize: "28px" }}>My Profile </p>

      <div className="Card">
        <div className="upper-container">
          <div className="image-container">
            <img
              className="  h-40 w-40 mb-2 mt-4 ml-2"
              // =" rounded-full h-12 w-12 b object-contain"
              src="https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png"
              alt=""
              height="100px"
              width="100px"
            />
          </div>
        </div>
        <div className="lower-container">
          <div className=" mb-4">
            <div className=" font-semibold  text-4xl"> {name} </div>
            <div className="  font-medium text-m"> {dob} </div>
            <div className=" font-medium  text-m"> {email} </div>
          </div>
          <div className=" ml-7">
            <div className=" flex mb-4">
              <p className=" font-semibold text-lg mr-2">Contact No:-{"   "}</p>
              <p className="text-lg ">{contactNo}</p>
            </div>
            <div className=" flex mb-4">
              <p className=" font-semibold text-lg mr-2">Designation:- </p>
              <p className="text-lg ">{designation}</p>
            </div>
            <div className=" flex mb-4">
              <p className=" font-semibold text-lg mr-2">Department:-</p>
              <p className="text-lg ">{department}</p>
            </div>
          </div>
          <button className="button-card"> View More </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
