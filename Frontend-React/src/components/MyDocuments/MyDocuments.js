import React from "react";
import "../Card.css";
import { Link } from "react-router-dom";

import axios from "axios";
import salrysliplogo from "./salaryslip.png";
import joininglogo from "./joiningletterlogo.png";
import appointmentlogo from "./appointmentlogo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
function MyDocuments() {
  const months = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "september" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];
  const years = [
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023" },
  ];

  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("2022");
  const obj = {
    month: month,
    year: year,
  };
  const monthChange = (event) => {
    setMonth(event.target.value);
  };
  const yearChange = (event) => {
    setYear(event.target.value);
  };
  const navigate = useNavigate();
  const getjoiningletter = () => {
    navigate("/joiningletter");
  };
  const getappointmentletter = () => {
    navigate("/appointmentletter");
  };
  const getsalaryslip = () => {
    navigate("/salaryslip", { state: obj });
  };
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Navbar />
      <div
        className=" flex text-4xl  justify-center"
        style={{ backgroundColor: "#f4f4f4" }}
      >
        <p>My Documents</p>
      </div>
      <div className="justify-center">
        <p className="  text-3xl mt-16 " style={{ marginLeft: "36rem" }}>
          My Documents
        </p>
        <hr
          class="w-54 h-2  mb-5  bg-red-700  border-0 rounded mt-4"
          style={{
            height: "3px",
            width: "14rem",
            backgroundColor: " #af356a",
            opacity: "2",
            marginLeft: "36rem",
          }}
        />{" "}
        <div className="flex">
          <div>
            <img
              className=" h-44 w-44 ml-28 "
              src={appointmentlogo}
              alt="salary"
            />

            <button
              className="px-2 py-0 h-8 ml-32"
              style={{ marginLeft: "10rem" }}
              onClick={getappointmentletter}
            >
              {" "}
              Preview{" "}
            </button>
          </div>

          <div className="ml-12">
            <img className=" h-44 w-44 ml-28" src={joininglogo} />
            <button
              className="px-2 py-0 h-8 ml-28"
              onClick={getjoiningletter}
              style={{ marginLeft: "10rem" }}
            >
              {" "}
              Preview{" "}
            </button>
          </div>

          <div>
            {/* <p className=" flex text-3xl mt-2 ml-20">Salary Slips :</p>
            <hr className="mx-20 mt-4" style={{ width: "80rem" }} /> */}
            <div className="flex">
              <div>
                <img className=" h-44 w-44  ml-28 " src={salrysliplogo} />
                <button
                  className="px-2 py-0 h-8 ml-28"
                  style={{ marginLeft: "10rem" }}
                  onClick={getsalaryslip}
                >
                  Preview
                </button>
              </div>
              <div className="text-right mt-4 ">
                <label className="">
                  Month:
                  <select
                    className="ml-4 w-32 rounded-md h-8"
                    value={month}
                    onChange={monthChange}
                  >
                    {months.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </label>
                <label className="mx-4 ">
                  Year:
                  <select
                    className="ml-4 mr-32 w-20 h-8 rounded-md  "
                    value={year}
                    onChange={yearChange}
                  >
                    {years.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </div>

          {/* <button className='py-0 h-8 '> download </button> */}
        </div>
      </div>

      {/* <div>
        <p className=" flex text-3xl mt-2 ml-20">Joining Letter :</p>
        <hr className="mx-20 mt-4" style={{ width: "80rem" }} />
        <div>
          <img className=" h-44 w-44 ml-10 " src={joininglogo} />
          <button className="px-2 py-0 h-8 ml-28" onClick={getjoiningletter}>
            {" "}
            Preview{" "}
          </button>
        </div>
      </div> */}

      <div
        style={{
          marginTop: "20rem",
          backgroundColor: "#f4f4f4",
        }}
      >
        <p>.</p>
      </div>
    </div>
  );
}
export default MyDocuments;
